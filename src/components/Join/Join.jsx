import React from 'react'
import './Join.css'
import emailjs from  '@emailjs/browser'
import { useRef } from 'react'

const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_z2w4emm', 'template_sqpw6ck', form.current, {
            publicKey: 'xkmXH3yw0mwsSrhdB',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div className="join" id="join-us">
         <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO </span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'> WITH US?</span>
            </div>
         </div>
         <div className="right-j">
           <form ref={form} className="email-conatiner" onSubmit={sendEmail}>
            <input type="text" name='user_email' placeholder='Enter Your Email Address' />
            <button className='btn btn-j'>Join Now</button>
           </form>
         </div>
    </div>
  )
}

export default Join