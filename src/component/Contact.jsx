
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { phone } from '../assets';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w3fk8ip', 'template_7lsysd6', form.current, {
        publicKey: '9jkie4jOdRr6rL_Ul',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Pesan anda berhasil dikirim")
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='w-screen flex flex-col justify-center pt-8 '>
    {/* Membuat header */}
    <div className='w-screen flex justify-center gap-2'>
    <h1 className='text-[40px]'>Contact</h1>
    <h1 className='text-[40px] text-purple-600'>Us</h1>
    <img src={phone} className='w-[50px] h-[50px] object-cover' alt="" />
    </div>

    {/* membuat form */}

    <div className='w-screen flex justify-center pt-8'>
    <form ref={form} className='flex flex-col gap-4 w-[300px] bg-purple-300 p-4' onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" className='outline-none rounded-md px-2' />
    <label>Email</label>
    <input type="email" name="user_email" className='outline-none rounded-md px-2' />
    <label>Message</label>
    <textarea name="message" className='outline-none rounded-md' />
    <input type="submit" value="Send" className='w-full p-2 bg-purple-600 text-white px-2' />
  </form>

    </div>
    

    </div>
  )
}

export default Contact