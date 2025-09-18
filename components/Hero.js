'use client'

import React from 'react'
import './Hero.css'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="hero">
            <a href="#aboutblog">
                <p className='read'>Announcing our latest blog posts. <span>Read more →</span></p>
                <p style={{ textAlign: 'center' }} className='read mobile'>Announcing our latest blog posts.<br /> <span>Read more →</span></p>
            </a>
            <h1>Welcome to Murtaza's <br /> Digital Space</h1>
            <p className='explore'>Exploring the latest in web development, programming insights, and technological <br /> trends.</p>
            <div className="btns">
                <Link href={'#featured'}><button className='r'>Read Featured Blogs</button></Link>
                <Link href={'/about'}> <button className='l'>Learn more about me →</button></Link>
            </div>
        </div>
    )
}

export default Hero