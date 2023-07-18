
import { Link } from 'react-router-dom'
import { ColumnContainer, RowContainer } from './styled-components/Containers'
import { ContactStyledLink } from './styled-components/StyledLink'
import { PropTypes } from 'prop-types'


function Contact(props) {

  const language = props.language;

  return (
    <>
      <ColumnContainer margin='10rem 0 0 0' id="contact" width="95vw">

          {language === 'english' ? <h1>Get in touch</h1> : <h1>Ponerse en contacto</h1>}
        <RowContainer margin="3rem 0 0 0" id="contacts-list">


          <ContactStyledLink margin="0 2rem 0 0">
              <Link to={'/email'}>Email</Link>
            </ContactStyledLink>
            <ContactStyledLink margin="0 2rem 0 0">
              <a href="https://www.linkedin.com/in/reuben-fuller-bennett-ab9a0031/" target='_blank' rel='noreferrer'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg" width="50" />
              </a>
            </ContactStyledLink>
            <ContactStyledLink margin="0 2rem 0 0">
              <a href="https://www.instagram.com/reuben.esque/" target='_blank' rel='noreferrer'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/CIS-A2K_Instagram_Icon_%28Pink%29.svg" width="50" />
              </a>
            </ContactStyledLink>



        </RowContainer>
      </ ColumnContainer>
    </>
  )
}

Contact.propTypes = {
  language: PropTypes.string
}

export default Contact
