
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
            <div className='contact-list-category-wrapper'>
              <h3>About</h3>
              <Link to="/about">About</Link>
            </div>
            <div className='contact-list-category-wrapper'>
              <h3>Explore</h3>
              <div><Link to="/resources">Resource</Link></div>
              <div><Link to="/blog">Blog</Link></div>
            </div>
            <div className='contact-list-category-wrapper'>
              <h3>Connect</h3>
              <div><Link to="/Contact">Contact</Link></div>
              <div><p>Follow us</p>
              <div id="contact-social-wrapper" className='row'>
              <img src="src/assets/🦆 icon _facebook_.svg" />
              <img src="src/assets/🦆 icon _instagram-alt_.svg" />
              <img src="src/assets/🦆 icon _twitter_.svg" />

            </div></div>
            </div>




        </div>
        <div id="footer">
          <div>Privacy & Accessibility</div>
          <div>Terms of use</div>
          <div>Sitemap</div>
          <div>Copyright 2023 RFB.</div>
        </div>
      </div>
    </>
  )
}

Contact.propTypes = {
  language: PropTypes.string
}

export default Contact
