import React from 'react';
// import contact from '../assets/images/islamabad.png';
// src="../islamabad/images/logoImg.png"
const ContactUs = React.memo(function ContactUs () {
  return (
    <>
      <section id="contact">
        <img className="object-center h-full w-full" src="https://cloudants.s3.amazonaws.com/assets/images/islamabad.png" alt="Contact Us"></img>
      </section>
    </>
  )
}, {})

export default ContactUs;