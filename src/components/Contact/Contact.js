import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    emailjs.init("FJhcVhz2rPzKlIBSY");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_34l0qtd', 
      'template_msi5imc', 
      {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'nikofauza@gmail.com',
      }
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    }, (error) => {
      console.log('FAILED...', error);
      alert('Failed to send email. Please try again.');
    });
  };

  return (
    <section className="contact-section">
      <h2>Let’s Make Magic!</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Send</button>
      </form>
    </section>
  );
};

export default Contact;