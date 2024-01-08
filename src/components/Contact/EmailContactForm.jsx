import { useRef, useState } from "react"
import emailjs from "emailjs-com";
import { PropTypes } from 'prop-types'
import { Link } from "react-router-dom";
import EmailContactDropdown from "./EmailContactDropdown";

const EmailContactForm = (props) => {
  const form = useRef();
  const language = props.language;
  const [checked, setChecked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
//the arguments passed to sendForm below need to be updated after creating a new emailjs template for Reuben's site
    emailjs.sendForm('service_f0weiij', 'template_9tf6q6f', form.current, 'hxHheb-8UKemaGtn8').then((result) => {
      console.log(result.text);
      alert("message sent!")
      setChecked(false)
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
              <label>First Name</label>
              <input type="text" name="name" />
            </div>
            <div className="email-form-field">
            <label>Email Address</label>
            <input type="email"  name="email" />
            </div>
            <div className="email-form-field">
              <label>Subject</label>
              <select id="subject" name="subject">
                <option value="consultation">Request a free consultation</option>
                <option value="info">General Information</option>
              </select>
            </div>
            <EmailContactDropdown language={language}/>
            <div className="email-form-field">
              <label>Message</label>
              <textarea name="message" />
            </div>
            <div className="email-form-checkbox">
              <label>I have read the <Link to='/disclaimer' target="_blank" rel="noopener noreferrer">disclaimer</Link></label>
              <input type="checkbox" onClick={(e)=> e.target.checked ? setChecked(true) : setChecked(false)}/>
            </div>
            {checked === true ? <input type="submit" value="Submit" className="submit" /> :
            <div className="submit unchecked" onClick={()=>alert('Please read the disclaimer, and check the box before submitting your message')}>Submit</div>}

          </div>

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
            <EmailContactDropdown language={language}/>
            <div className="email-form-field">
              <label>Mensaje</label>
              <textarea name="message" />
            </div>
            <div className="email-form-checkbox">
              <label>He leído <Link to='/disclaimer' language={language} target="_blank" rel="noopener noreferrer">el aviso legal</Link></label>
              <input type="checkbox" onClick={(e)=> e.target.checked ? setChecked(true) : setChecked(false)}/>
            </div>
            {checked === true ? <input type="submit" value="Entregar" className="submit" /> :
            <div className="submit unchecked" onClick={()=>alert('Lea el descargo de responsabilidad y marque la casilla antes de enviar su mensaje')}>Entregar</div>}
          </div>
        </form>}
    </div>
  )

}

EmailContactForm.propTypes = {
  language: PropTypes.string
}

export default EmailContactForm;
