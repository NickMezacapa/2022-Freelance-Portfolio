import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_8egb67s', form.current, 'Vc-dF9cNNHNh9C3kK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  const handleClick_submit = (e) => {
        const nameInput = document.getElementById('contact-form-name-input');
        const emailInput = document.getElementById('contact-form-email-input');
        const messageInput = document.getElementById('contact-form-message-input');
        if (nameInput.value !== '' && emailInput.value !== '' && messageInput.value !== '') {
            sendEmail(e);
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        }
        if (nameInput.value === '') {
            e.preventDefault();
            nameInput.focus();
            nameInput.placeholder = 'required';
            nameInput.style.border = '2px solid red';
            nameInput.classList.add('error-active');
            setTimeout(() => {
                nameInput.classList.remove('error-active');
                nameInput.style.border = 'none';
                nameInput.placeholder = '';
            }, 2000);
        }
        if (emailInput.value === '') {
            e.preventDefault();
            emailInput.focus();
            emailInput.placeholder = 'required';
            emailInput.style.border = '2px solid red';
            emailInput.classList.add('error-active');
            setTimeout(() => {
                emailInput.classList.remove('error-active');
                emailInput.style.border = 'none';
                emailInput.placeholder = '';
            }, 2000);
        }
        if (messageInput.value === '') {
            e.preventDefault();
            messageInput.focus();
            messageInput.placeholder = 'required';
            messageInput.style.border = '2px solid red';
            messageInput.classList.add('error-active');
            setTimeout(() => {
                messageInput.classList.remove('error-active');
                messageInput.style.border = 'none';
                messageInput.placeholder = 'Enter your message here...';
            }, 2000);
        }
};

  return (
    <div className="contact-form-cta">
        <div className="contact-overflow">
        <div className="contact-form-wrapper">
            <form ref={form} onSubmit={sendEmail} id='contact-form'>
                <div className="contact-context">
                <div className="contact-form-c1">
                    <div className="small-inputs">

                        <div className="contact-name contact-inputs">
                            <label id="contact-form-name-label" className="label-c" for="contact-form-name-input">Name:</label>
                            <input type="text" name="user_name" id='contact-form-name-input' className='contact-input-item name-contact-input' />
                        </div>

                        <div className="contact-emailBack contact-inputs">
                            <label id="contact-form-email-label" className="label-c"  for="contact-form-email-input">Email:</label>
                            <input type="email" name="user_email" id="contact-form-email-input" className='contact-input-item email-contact-input' />
                        </div>

                        <div className="contact-subject-of-email contact-inputs">
                            <label id="contact-subject-label" className="label-c"  for="contact-subject-input">Subject:</label>
                            <input type="text" name="subject" id='contact-subject-input' className='contact-input-item' placeholder='(optional)' />
                        </div>

                    </div>
                    <div className="contact-textarea">
                        <div className="contact-message-label-cta">
                            <label className="contact-message-label label-c" for="contact-form-message-input">Message</label>
                        </div>
                        <div className="contact-message-enterText">
                                <div className="contact-message-content">
                                    <textarea name="message" id="contact-form-message-input" className='contact-inputs' placeholder='Enter your message here...'/>
                                </div>
                        </div>
                    </div>
                </div>

                    <div className="contact-form-c2">
                        <div className="contact-submit">
                                <input type="submit" value="Send Email" id="contact-form-send-button" onClick={handleClick_submit} />
                        </div>
                    </div>

                </div>
            </form>
        </div>
        </div>
    </div>
  );
};

export default ContactForm;




