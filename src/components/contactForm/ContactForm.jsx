import React, { Component } from 'react';
import axios from 'axios';

import './ContactForm.css';

class ContactForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
      method: 'POST',
      url: 'http://localhost:4000/api/terapias/mail/mailRouter',
      data: {
        name: name,
        email: email,
        messsage: message,
      },
    }).then((response) => {
      if (response.data.msg === 'success') {
        alert('Message Sent.');
        this.resetForm();
      } else if (response.data.msg === 'fail') {
        alert('Message failed to send.');
      }
    });
  }

  resetForm() {
    document.getElementById('contact-form').reset();
  }

  render() {
    return (
      <div className='container_custom'>
        <form
          id='contact-form'
          onSubmit={this.handleSubmit.bind(this)}
          method='POST'>
          <div className='group_custom'>
            <span className='highlight'></span>
            <span className='bar'></span>
            <label htmlFor='name' className='custom_label'>
              Nombre
            </label>
            <input autocomplete type='text' id='name' />
          </div>
          <div className='group_custom'>
            <span className='highlight'></span>
            <span className='bar'></span>
            <label htmlFor='exampleInputEmail1' className='custom_label'>
              Correo electrónico
            </label>
            <input
              autocomplete
              type='email'
              id='email'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='group_custom'>
            <span className='highlight'></span>
            <span className='bar'></span>
            <label htmlFor='message' className='custom_label'>
              Mensaje
            </label>
            <textarea id='message'></textarea>
          </div>

          <a href='#' class='button'>
            Envía
          </a>
        </form>
      </div>
    );
  }
}

export default ContactForm;
