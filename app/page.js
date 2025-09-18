import Featured from '@/components/Featured'
import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <div id='aboutblog' className="aboutread">
        <h1>About This Blog</h1>
        <p>
          Welcome to our Tech Blog!
          Here, you’ll find the latest articles, guides, and insights about the world of technology. Whether you’re a beginner or an experienced developer, this blog will bring you:

          Tech News & Trends – Stay updated with what’s happening in the tech industry.

          Programming & Web Development – Learn tips, tricks, and tutorials about coding, React.js, Next.js, and more.

          Modern Tools & Frameworks – Explore guides on APIs, libraries, and trending technologies.

          Best Practices – Read about security, performance optimization, and professional workflows.

          This blog is designed for students, developers, and tech enthusiasts who want to grow their knowledge and stay ahead in the fast-changing world of technology.</p>
      </div>
      <Featured />
    </div>
  )
}

export default page