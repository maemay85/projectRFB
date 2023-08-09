
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'


function Contact(props) {

  const language = props.language;

  return (
    <>
      <div className="column" id="contact-page-container">

          {language === 'english' ? <h1>Get in touch</h1> : <h1>Ponerse en contacto</h1>}
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
