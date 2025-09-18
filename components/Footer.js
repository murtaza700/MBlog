'use client'
import React from 'react'
import './Footer.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="top">
                    <div>
                        <h3>Murtaza</h3>
                        <p>A passionate developer creating modern and <br /> responsive web applications.</p>
                    </div>
                    <div>
                        <h3>Navigation</h3>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </div>
                    <div>
                        <h3>Legal</h3>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
                <div className="bot">
                    <span>© 2025 Murtaza. All rights reserved.</span>
                    <div className="icons">
                        <div className="linkedin">
                            <a href="https://www.linkedin.com/in/murtaza7/" target='_blank'> <svg fillRule="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a>
                        </div>
                        <div className="github">
                            <a href="https://github.com/murtaza700">
                                <svg fillRule="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                        <div className="fb">
                            <a href="https://www.facebook.com/murtazakasur7" target='_blank'><svg fillRule="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2.06c-5.5 0-10 4.5-10 10 0 4.94 3.61 9.06 8.33 9.89l.06-.05h-.06v-7.06h-2.5v-2.78h2.5V9.84c0-2.5 1.61-3.89 3.89-3.89.72 0 1.5.11 2.22.22v2.56h-1.28c-1.22 0-1.5.61-1.5 1.39v1.94h2.67l-.44 2.78h-2.22v7.06h-.06l.06.05c4.72-.83 8.33-4.94 8.33-9.89 0-5.5-4.5-10-10-10"></path></svg></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer


{/* <p>&copy; 2025 Murtaza. All rights reserved.</p> */ }