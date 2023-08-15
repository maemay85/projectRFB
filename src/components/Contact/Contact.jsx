
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import EmailContactForm from './EmailContactForm';


function Contact(props) {

  const language = props.language;

  return (
    <>
      <div id="contact-page-container">

          {language === 'english' ?
            <div id="contact-page-header">
              <h1>LET'S CONNECT</h1>
              <p>Get the latest resources, events, and stories delivered to your inbox each month. Join our community newsletter.</p>
            </div>
            :
            <div id="contact-page-header">
              <h1>PONERSE EN CONTACTO</h1>
              <p>Reciba los últimos recursos, eventos e historias en su bandeja de entrada cada mes. Únase a nuestro boletín comunitario.</p>
            </div>
          }
        <div id="email-form-container">
          <EmailContactForm />
        </div>
        <div className='row' id="contact-list-container">


          <div className="contact-link">
              <Link to={'/email'}>Email</Link>
            </div>
            <div className="contact-link">
              <a href="https://www.linkedin.com/in/reuben-fuller-bennett-ab9a0031/" target='_blank' rel='noreferrer'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg" width="50" />
              </a>
            </div>
            <div className="contact-link">
              <a href="https://www.instagram.com/reuben.esque/" target='_blank' rel='noreferrer'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/CIS-A2K_Instagram_Icon_%28Pink%29.svg" width="50" />
              </a>
            </div>

        </div>
      </div>
    </>
  )
}

Contact.propTypes = {
  language: PropTypes.string
}

export default Contact
