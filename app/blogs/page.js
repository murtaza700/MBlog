import React from 'react'
import './Blogs.css'
import AllBlogs from '@/components/AllBlogs'

const Blogs = () => {
  return (
    <section>
      <AllBlogs />
    </section>
  )
}

export default Blogs

export const metadata = {
  title: "Blogs | Blogs by Murtaza",
  description: "Read the latest Dev.to blogs fetched in real-time. Explore articles on React, Next.js, JavaScript, and web development trends from top developers.",
};