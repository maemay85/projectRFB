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
    <div id="email-form-container">
      {language === 'english' ?
        <form ref={form} onSubmit={sendEmail}>
          <div id="email-form">
            <div className="email-form-field">
              <label>Name</label>
              <input type="text" name="name" />
            </div>
            <div className="email-form-field">
            <label>Email</label>
            <input type="email"  name="email" />
            </div>
            <div className="email-form-field">
              <label>Subject</label>
              <select id="subject" name="subject">
                <option value="consultation">Request a free consultation</option>
                <option value="info">General Information</option>
              </select>
            </div>
            <div className="email-form-field">
              <label>Message</label>
              <textarea name="message" />
            </div>
          </div>
          <input type="submit" value="Submit" className="submit" />
        </form>
        :
        <form ref={form} onSubmit={sendEmail}>
          <div id="email-form">
            <div className="email-form-field">
              <label>Nombre</label>
              <input type="text" name="name" />
            </div>
            <div className="email-form-field">
            <label>Email</label>
            <input type="email"  name="email" />
            </div>
            <div className="email-form-field">
              <label>El Asunto</label>
              <select id="subject" name="subject">
                <option value="consultation">Solicite una consulta gratuita</option>
                <option value="info">Información general</option>
              </select>
            </div>
            <div className="email-form-field">
              <label>Mensaje</label>
              <textarea name="message" />
            </div>
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
