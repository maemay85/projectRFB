
import { Link } from 'react-router-dom'
import { ColumnContainer, RowContainer } from './styled-components/Containers'
import { PropTypes } from 'prop-types'


function Contact(props) {

  const language = props.language;

  return (
    <>
      <ColumnContainer margin='10rem 0 0 0' id="contact" width="95vw">

          {language === 'english' ? <h1>Get in touch</h1> : <h1>Ponerse en contacto</h1>}
        <RowContainer margin="3rem 0 0 0" id="contacts-list">


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



        </RowContainer>
      </ ColumnContainer>
    </>
  )
}

Contact.propTypes = {
  language: PropTypes.string
}

export default Contact
