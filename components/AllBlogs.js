'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import './AllBlogs.css'
import axios from 'axios'

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [errors, setErrors] = useState('');
    const [page, setPage] = useState(1);

    const getBlogs = async () => {
        try {
            const res = await axios.get(`https://dev.to/api/articles?page=${page}`)
            setBlogs(res.data)
        }
        catch (err) {
            console.log(err)
            setErrors('Error Data Fetching!')
        }
    }

    useEffect(() => {
        const savedPage = localStorage.getItem('currentPage');
        if (savedPage) {
            setPage(Number(savedPage));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('currentPage', page);
        getBlogs();
    }, [page]);

    return (
        <div className="allblogs">
            <h1>All Blogs</h1>
            <div>
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
            <div className="btns">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>&lt;</button>
                <span>{page}</span>
                <button onClick={() => setPage(page + 1)}>&gt;</button>
            </div>
        </div>
    )
}

export default AllBlogs