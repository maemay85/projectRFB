

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
              <p>{`For more information, or to book a free consultation, contact Reuben by filling out the contact form below:`}</p>
              <div id='contact-info'>
                <div id='contact-info-left'>
                  <p>Email:</p>
                  <p>Call / Text:</p>
                  <p>Address:</p>
                </div>
                <div id='contact-info-right'>
                  <p>Reuben@rfblaw.nyc</p>
                  <p>{'(347) 674-9380'}</p>
                  <p>55 Prospect Park Southwest <br/>
                    Brooklyn, NY <br/>
                    11215
                  </p>
                </div>
              </div>
            </div>
            :
            <div id="contact-page-header">
              <h1>PONERSE EN CONTACTO</h1>
              <p>{"Para obtener más información o reservar una consulta gratuita, comuníquese con Reuben completando el formulario de contacto aquí:"}</p>
              <div id='contact-info'>
                <div id='contact-info-left'>
                  <p>Correo:</p>
                  <p>Llamadas / Textos:</p>
                  <p>Dirección:</p>
                </div>
                <div id='contact-info-right'>
                  <p>Reuben@rfblaw.nyc</p>
                  <p>{'(347) 674-9380'}</p>
                  <p>55 Prospect Park Southwest <br/>
                    Brooklyn, NY <br/>
                    11215
                  </p>
                </div>
              </div>
            </div>
          }
        <div id='contact-map-and-email-container'>
          <EmailContactForm language={language} />
          <div id='contact-map-image-wrapper'>
            <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/rfbmap.png" />
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
