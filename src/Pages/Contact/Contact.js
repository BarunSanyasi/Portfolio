import React from 'react'
import styled from 'styled-components';
import { useRef } from 'react';
import { Snackbar } from '@mui/material';
import "./Contact.css";
import emailjs from '@emailjs/browser';


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.25);;
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color:#000000;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid rgb(42, 171, 203);
  outline: none;
  font-size: 18px;
  color: #00000;
  border-radius: 1rem;
  padding: 12px 16px;
  
  &:focus {
    border: 1px solid #000;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid #rgb(42, 171, 203);
  outline: none;
  font-size: 18px;
  color: #000000;
  border-radius: 1rem;
  padding: 12px 16px;
  &:focus {
    border: 1px solid #000;
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: rgba(39, 142, 165, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 1rem;
  border: none;
  color: #071E3D;
  font-size: 18px;
  font-weight: 600;
  &:hover{
    background-color: rgb(106,199,223);
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_sake9mq', 'template_9c2c8t6', form.current, 'SVh_RyhFG0iD4JXZD')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="contact-container-box">
      <h1>Contact</h1>
      <p>Feel free to reach out to me for any questions or opportunities!</p>
      <div className='container-box'>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me</ContactTitle>
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" rows="5" name="message" required />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>
  )
}

export default Contact;