import React from 'react'
import './About.css'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <section className='about'>
      <div className="top">
        <h1>About Murtaza</h1>
        <p>Crafting beautiful and functional digital experiences with a passion for code <br /> and a commitment to quality.</p>
      </div>
      <div className="journey">
        <div className='left'>
          <h1>My Journey in Technology</h1>
          <p>Hello! I'm Murtaza, a developer based in Kasur with a deep love for creating things for the web. My journey into programming started with a simple curiosity about how websites worked, which quickly blossomed into a full-fledged passion.</p>
          <p>Over the years, I've honed my skills in modern technologies like Next.js, React, and Tailwind CSS. I believe that a great website is not just about writing clean code, but also about creating an intuitive and enjoyable experience for the end-user. My goal is to bridge the gap between complex technical challenges and elegant user-centric design.</p>
        </div>
        <div className="right">
          <Image src={'/profile.png'} alt='murtaza profile picture' width={350} height={350} />
        </div>
      </div>
      <div className="believe">
        <h1>What I Believe In</h1>
        <p>My work is guided by a few core principles that ensure success for every project I <br /> undertake.</p>
        <div className='bcards'>
          <div className="card">
            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"></path></svg></div>
            <h3>Quality Code</h3>
            <p>Writing clean, efficient, and maintainable code that stands the test of time.</p>
          </div>
          <div className="card">
            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.184m-1.5.184a6.01 6.01 0 01-1.5-.184m3.75 7.5H9.75a2.25 2.25 0 01-2.25-2.25v-4.5a2.25 2.25 0 012.25-2.25h4.5a2.25 2.25 0 012.25 2.25v4.5a2.25 2.25 0 01-2.25 2.25z"></path></svg></div>
            <h3>Creative Innovation</h3>
            <p>Constantly exploring new technologies to find unique and effective solutions.</p>
          </div>
          <div className="card">
            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.023 1.549-1.834 2.638-2.31M10.5 16.5c-1.282 0-2.47-.402-3.445-1.087a3 3 0 01-4.682-2.72 9.094 9.094 0 013.741-.479m10.156 5.175c-.328-.184-.67-.348-1.02-.492M10.5 16.5c-.35-.144-.69-.308-1.02-.492m-7.5-2.962c.57-1.023 1.549-1.834 2.638-2.31M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.023 1.549-1.834 2.638-2.31"></path></svg></div>
            <h3>Client Collaboration</h3>
            <p>Working closely with clients to understand their vision and bring it to life together.</p>
          </div>
        </div>
      </div>
      <div className="touch">
        <h1>Ready to build something amazing?</h1>
        <p>Let's work together to create an outstanding digital product for your business.</p>
        <Link href={'/contact'}><button>Get in Touch</button></Link>
      </div>
    </section>
  )
}

export default About



export const metadata = {
  title: "About | Blogs by Murtaza",
  description: "Learn more about our mission to share the best Dev.to blogs and coding resources. We make it simple to explore programming knowledge in one place.",
};