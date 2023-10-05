import { useRef } from "react"
import emailjs from "emailjs-com";
import { PropTypes } from 'prop-types'

const EmailContactForm = (props) => {
  const form = useRef();
  const language = props.language;

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
    <div id="email-form">
      {language === 'english' ?
        <form ref={form} onSubmit={sendEmail}>
          <div className="email-form-field">
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div className="email-form-field">
          <label>Email</label>
          <input type="email"  name="email" />
          </div>
          <input type="submit" value="Submit" className="submit" />
        </form>
        :
        <form ref={form} onSubmit={sendEmail}>
          <div className="email-form-field">
            <label>Nombre</label>
            <input type="text" name="name" />
          </div>
          <div className="email-form-field">
          <label>Email</label>
          <input type="email"  name="email" />
          </div>
          <input type="submit" value="Entregar" className="submit" />
        </form>}
    </div>
  )

}

EmailContactForm.propTypes = {
  language: PropTypes.string
}

export default EmailContactForm;
