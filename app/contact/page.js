import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
      <div className='top'>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below or reach out to us directly.</p>
      </div>
      <div className='center'>
        <div style={{ paddingRight: '60px' }} className="l">
          <h2>Get in Touch</h2>
          <p>Have a question or a project in mind? Our team is ready to assist you. Contact us through any of the channels below.</p>
          <div className="iconscontact">
            <div>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fillRule="currentColor" height='24' width='24'><path d="M12 15c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" /><path d="M11.65 21.94a1.03 1.03 0 0 0 .7 0C12.7 21.81 21 18.61 21 11c0-4.96-4.04-9-9-9s-9 4.04-9 9c0 7.6 8.3 10.8 8.65 10.94M12 4c3.86 0 7 3.14 7 7 0 5.42-5.53 8.26-7 8.91-1.47-.66-7-3.5-7-8.91 0-3.86 3.14-7 7-7" /></svg>
              </div>
              <div>
                <h3>Our Address</h3>
                <p>Nizam Pura Road, Kasur, Punjab, Pakistan</p>
              </div>
            </div>
            <div>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fillRule="currentColor" height='24' width='24'><path d="M18.07 22h.35c.47-.02.9-.26 1.17-.64l2.14-3.09c.23-.33.32-.74.24-1.14s-.31-.74-.64-.97l-4.64-3.09a1.47 1.47 0 0 0-.83-.25c-.41 0-.81.16-1.1.48l-1.47 1.59c-.69-.43-1.61-1.07-2.36-1.82-.72-.72-1.37-1.64-1.82-2.36l1.59-1.47c.54-.5.64-1.32.23-1.93L7.84 2.67c-.22-.33-.57-.57-.97-.64a1.46 1.46 0 0 0-1.13.24L2.65 4.41c-.39.27-.62.7-.64 1.17-.03.69-.16 6.9 4.68 11.74 4.35 4.35 9.81 4.69 11.38 4.69ZM6.88 10.05c-.16.15-.21.39-.11.59.05.09 1.15 2.24 2.74 3.84 1.6 1.6 3.75 2.7 3.84 2.75.2.1.44.06.59-.11l1.99-2.15 3.86 2.57-1.7 2.46c-1.16 0-6.13-.24-9.99-4.1S4 7.06 4 5.91l2.46-1.7 2.57 3.86-2.15 1.99Z" /></svg>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+92 314 7624830</p>
                <p>+92 304 0670987</p>
              </div>
            </div>
            <div>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fillRule='currentColor' height='24' width='24'><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2v.51l-8 6.22-8-6.22V6zM4 18V9.04l7.39 5.74c.18.14.4.21.61.21s.43-.07.61-.21L20 9.03v8.96H4Z" /></svg>
              </div>
              <div>
                <h3>Email</h3>
                <p>murtazakasur7@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="r">
          <form action="submit">
            <h2>Send a Message</h2>
            <div className="name">
              <div>
                <label htmlFor="name">First Name</label>
                <input type="text" id='name' />
              </div>
              <div>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id='lastname' />
              </div>
            </div>
            <div className="mail">
              <label htmlFor="email">Email</label>
              <input type="email" id='email' />
            </div>
            <div className="msg">
              <label htmlFor="msg">Message</label>
              <textarea rows={5} name="msg" id="msg"></textarea>
            </div>
          </form>
          <button>Send Meassage</button>
        </div>
      </div>
    </section>
  )
}

export default Contact



export const metadata = {
  title: "Contact | Blogs by Murtaza",
  description: "Get in touch with us for queries, feedback, or collaborations. We’d love to connect and help you with your coding and blogging journey.",
};