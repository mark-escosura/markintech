import React from 'react';

const ContactCard = ({
  initialFormValues,
  handleChange,
  handleSubmit,
  form,
  success,
}) => {
  const { name, email, message } = initialFormValues;
  return (
    <div>
      <form className='contact_card' ref={form} onSubmit={handleSubmit}>
        <div className='input_wrapper'>
          <input
            type='text'
            name='user_name'
            value={name}
            required
            placeholder='Ex. John Doe'
            onChange={handleChange}
          />
          <label htmlFor='name'>
            <span className='icon'>🙋🏽‍♂️</span>
            Name
          </label>
        </div>
        <div className='input_wrapper'>
          <input
            type='email'
            name='user_email'
            value={email}
            required
            placeholder='Ex: johndoe@exmail.com'
            onChange={handleChange}
          />
          <label htmlFor='email'>
            <span className='icon'>📩</span>
            Email Address
          </label>
        </div>
        <div className='input_wrapper'>
          <textarea
            name='message'
            value={message}
            required
            placeholder='Say hi..'
            className='message_input'
            onChange={handleChange}
          />
          <label htmlFor='message'>
            <span className='icon'>📝</span>
            Message
          </label>
        </div>
        <input className='submit_input' type='submit' value='Send' />
        {success ? <p className='success'>Message Sent! Thank you!</p> : null}
      </form>
    </div>
  );
};

export default ContactCard;
