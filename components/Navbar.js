'use client'
import React, { useState } from 'react'
import './Navbar.css'
import Link from 'next/link'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='navbar'>
            <nav>
                <Link href={'/'}><div className="logo">Blogs</div></Link>
                <span className='ham' onClick={() => setOpen(!open)}> <img className='menu' src="/menu.svg" alt="" /></span>

                {/* <button className='ham' onClick={() => setOpen(!open)}> <img className='menu' src="/menu.svg" alt="" /></button> */}

                {/* <button className='ham' onClick={() => setOpen(!open)}>{open ? <img className='close' src="/close.svg" alt="" /> : <img className='menu' src="/menu.svg" alt="" />}</button> */}
                <ul className={open ? '' : 'ul'}>
                    <li><Link onClick={() => setOpen(!open)} href={'/'}>Home</Link></li>
                    <li><Link onClick={() => setOpen(!open)} href={'/blogs'}>Blogs</Link></li>
                    <li><Link onClick={() => setOpen(!open)} href={'/about'}>About</Link></li>
                    <li><Link onClick={() => setOpen(!open)} href={'/contact'}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar