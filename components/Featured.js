'use client'

import React, { useEffect, useState } from 'react'
import './Featured.css'
import Link from 'next/link'
import axios from 'axios'
import Image from 'next/image'

const Featured = () => {
    const [blogs, setBlogs] = useState([]);
    const [errors, setErrors] = useState('');
    const [page, setPage] = useState(1);

    const getBlogs = async () => {
        try {
            const res = await axios.get(`https://dev.to/api/articles?page=${page}&per_page=3`)
            setBlogs(res.data)
        }
        catch (err) {
            console.log(err)
            setErrors('Error Data Fetching!')
        }
    }

    useEffect(() => {
        getBlogs();
    }, []);
    return (
        <section id='featured' className='featured'>
            <div className="up">
                <h3>Featured Blogs</h3>
                <p>Read helpfull articals about technology.</p>
            </div>
            <div className="threeblogs">
                {blogs.map(item => {
                    return (
                        <div key={item.id} className="blog">
                            <div className="image">
                                <Image
                                    src={item.cover_image ? item.cover_image : item.social_image}
                                    alt={item.title}
                                    fill
                                    priority={item.cover_image ? false : true}
                                />
                            </div>
                            <div className="user">
                                <div key={item.user.user_id}>
                                    <a target='_blank' href={item.user.website_url}>
                                        <Image
                                            src={item.user.profile_image_90}
                                            width={40}
                                            height={40}
                                            alt={item.user.name}
                                        />
                                    </a>
                                    <a target='_blank' href={item.user.website_url}>
                                        <span>{item.user.name}</span>
                                    </a>
                                </div>
                                <span className='date'>{item.readable_publish_date}</span>
                            </div>
                            <div className="text">
                                <h2 className='title'>{(item.title).slice(0, 50)}...</h2>
                                <p className='desc'>{(item.description).slice(0, 70)}...</p>

                                <div className="tags">
                                    {item.tag_list.map((tag, index) => (
                                        <span className='tag' key={index}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <a href={item.url} target='_blank' ><button className='readbtn'>Read more</button></a>
                        </div>
                    )
                })}
            </div>
            <Link href={'/blogs'}>More Blogs →</Link>
        </section>
    )
}

export default Featured