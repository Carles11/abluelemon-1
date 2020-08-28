import React, { useState } from 'react';
import axios from 'axios';
import * as API from '../../utils/API';

import './ContactForm.css';

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    subject: '',
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

    const data = {
      name: inputs.name,
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
      message: '',
    });
  };

  return (
    <div className='container_custom'>
      <form id='contact-form' onSubmit={handleSubmit} method='POST'>
        <ol>
          <li>
            <input
              autoComplete
              type='text'
              id='name'
              name='name'
              onChange={handleChange}
              size='40'
            />
            <label htmlFor='name'>Nombre</label>
          </li>
          <li>
            <input
              autoComplete
              type='email'
              id='email'
              name='email'
              aria-describedby='emailHelp'
              onChange={handleChange}
              size='40'
            />
            <label htmlFor='email'>Correo electrónico</label>
          </li>
          <li>
            <textarea
              id='message'
              name='message'
              type='text'
              onChange={handleChange}
            />
            <label id='mensaje' htmlFor='message'>
              Mensaje
            </label>
          </li>
          {/* <div className='switch'>
            <input id='switch-1' type='checkbox' className='switch-input' />
            <label htmlFor='switch-1' className='switch-label'>
              LALALALALALALALALALLA
            </label>
          </div> */}
        </ol>

        <div className='submit'>
          <input type='submit' value='envía' className='button' />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
