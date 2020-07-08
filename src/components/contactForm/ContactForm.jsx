import React, { useState } from 'react';
import axios from 'axios';
import * as API from '../../utils/API';

import './ContactForm.css';

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    subject: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(() => ({ [name]: value }));
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { email, name, subject, description } = inputs;
  //   axios.post(API.get('mails'), {
  //     //make an object to be handled from req.body on the backend.
  //     email,
  //     name,
  //     subject,
  //     //change the name to represent text on the backend.
  //     text: description,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: inputs.name,
      subject: inputs.subject,
      email: inputs.email,
      message: inputs.message,
    };
    axios
      .post(API.get('emails'), data)
      .then((res) => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log('Message not sent');
      });
  };
  const resetForm = () => {
    setInputs({
      email: '',
      name: '',
      subject: '',
      description: '',
    });
  };

  return (
    <div className='container_custom'>
      <form id='contact-form' onSubmit={handleSubmit} method='POST'>
        <div className='group_custom'>
          <span className='highlight'></span>
          <span className='bar'></span>
          <label htmlFor='name' className='custom_label'>
            Nombre
          </label>
          <input autoComplete type='text' id='name' onChange={handleChange} />
        </div>
        <div className='group_custom'>
          <span className='highlight'></span>
          <span className='bar'></span>
          <label htmlFor='exampleInputEmail1' className='custom_label'>
            Correo electrónico
          </label>
          <input
            autoComplete
            type='email'
            id='email'
            aria-describedby='emailHelp'
            onChange={handleChange}
          />
        </div>
        <div className='group_custom'>
          <span className='highlight'></span>
          <span className='bar'></span>
          <label htmlFor='message' className='custom_label'>
            Mensaje
          </label>
          <textarea id='message' type='text' onChange={handleChange}></textarea>
        </div>

        <a href='#' className='button'>
          Envía
        </a>
      </form>
    </div>
  );
};

export default ContactForm;
