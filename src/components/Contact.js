import React, { useRef, useState } from 'react';
import ContactCard from '../sub-components/ContactCard';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [initialFormValues, setInitialFormValues] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setInitialFormValues({
      ...initialFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3x8wzvd',
        'template_mhigev8',
        form.current,
        'OkN22ePz64p9rJfZi'
      )
      .then(
        (result) => {
          console.log('Status Code:', `200 (${result.text}!)`);
          console.log('Hey I see you just messaged me 😏. Lets Party 🎉');
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInitialFormValues({
          name: '',
          email: '',
          message: '',
        });
      });
  };

  return (
    <section id='contact'>
      <h2>Contact</h2>
      <ContactCard
        form={form}
        initialFormValues={initialFormValues}
        success={success}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default Contact;
