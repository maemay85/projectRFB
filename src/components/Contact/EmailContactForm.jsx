import { useRef } from "react"
import emailjs from "emailjs-com";


const EmailContactForm = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
//the arguments passed to sendForm below need to be updated after creating a new emailjs template for Reuben's site
    emailjs.sendForm('service_f0weiij', 'template_9tf6q6f', form.current, 'hxHheb-8UKemaGtn8').then((result) => {
      console.log(result.text);
      alert("message sent!")
    }, (error) => {
      console.log(error.text);
    })
    e.target.reset()
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="email-form-field">
          <label>First Name</label>
          <input type="text" name="name" />
        </div>
        <div className="email-form-field">
        <label>Email</label>
        <input type="email"  name="email" />
        </div>
        <input type="submit" value="Sign Me Up" className="submit" />
      </form>
    </>
  )

}

export default EmailContactForm;
