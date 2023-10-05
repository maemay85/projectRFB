
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
              <h1>{"LET'S CONNECT"}</h1>
              <p>{"For more information, or to book a free consultation, contact Reuben by filling out the contact form here, emailing reuben@rfblaw.nyc, or calling / texting (347) 674-9380."}</p>
            </div>
            :
            <div id="contact-page-header">
              <h1>PONERSE EN CONTACTO</h1>
              <p>{"Para obtener más información o reservar una consulta gratuita, comuníquese con Reuben completando el formulario de contacto aquí, enviando un correo electrónico a reuben@rfblaw.nyc o llamando o enviando mensajes de texto al (347) 674-9380."}</p>
            </div>
          }
        <div id="email-form-container">
          <EmailContactForm language={language} />
        </div>
        <div className='row' id="contact-list-container">
            <div className='contact-list-category-wrapper'>
              {language === 'english' ?
                <>
                  <h3>Explore</h3>
                  <Link to="/about">About</Link>
                  <Link to="/resources">Resources</Link>
                </>
                :
                <>
                  <h3>Explorar</h3>
                  <Link to="/about">Acerca</Link>
                  <Link to="/resources">Recursos</Link>
                </>}

            </div>

            <div className='contact-list-category-wrapper'>
              {language === 'english' ?
                <>
                  <h3>Connect</h3>
                  <div><Link to="/Contact">Contact</Link></div>
                  <div>
                    <p>Follow us</p>
                    <div id="contact-social-wrapper" className='row'>
                      <a href="https://facebook.com/reuben.fullerbennett">
                        <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/🦆 icon _facebook_.svg" />
                      </a>
                      <a href="https://instagram.com/reuben.esque/">
                        <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/🦆 icon _instagram-alt_.svg" />
                      </a>
                      <a href="https://twitter.com/ReubenFull30474">
                        <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/🦆 icon _twitter_.svg" />
                      </a>
                    </div>
                  </div>
                </>
              :
                <>
                  <h3>Connectar</h3>
                  <div><Link to="/Contact">Contactos</Link></div>
                  <div>
                    <p>Síganos</p>
                    <div id="contact-social-wrapper" className='row'>
                    <a href="https://facebook.com/reuben.fullerbennett">
                        <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/🦆 icon _facebook_.svg" />
                      </a>
                      <a href="https://instagram.com/reuben.esque/">
                        <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/🦆 icon _instagram-alt_.svg" />
                      </a>
                      <a href="https://twitter.com/ReubenFull30474">
                        <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/🦆 icon _twitter_.svg" />
                      </a>
                    </div>
                  </div>
                </>
              }
            </div>




        </div>
        <div id="footer">
          <div><Link to={'/privacy-and-accessibility'}>{language === 'english' ? 'Privacy & Accessibility' : 'Privacidad & Accesibilidad'}</Link></div>
          <div>
            <Link to={'/disclaimer'}>{language === 'english' ? 'Disclaimer' : 'Descargo de responsabilidad'}</Link>
          </div>
          {/* <div>Sitemap</div> */}
          <div>{language === "english" ? "Copyright 2023 RFB." : "Derechos de Autor 2023 RFB."}</div>
        </div>
      </div>
    </>
  )
}

Contact.propTypes = {
  language: PropTypes.string
}

export default Contact
