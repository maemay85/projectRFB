import { useRef } from "react"
import emailjs from "emailjs-com";
import { SpaceLink } from "./styled-components/SpaceLink";
import { Link } from "react-router-dom";


const EmailContactForm = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f0weiij', 'template_9tf6q6f', form.current, 'hxHheb-8UKemaGtn8').then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    })
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name:</label>
        <input type="text" name="user_name" />
        <label>Email:</label>
        <input type="email" name="user_email" />
        <label>Message:</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="submit" />
      </form>
      <SpaceLink>
        <Link to={'/contact'}>back to contact</Link>
      </SpaceLink>
    </>
  )

}

export default EmailContactForm;
