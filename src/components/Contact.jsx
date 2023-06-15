
import { Link } from 'react-router-dom'
import { ColumnContainer, RowContainer } from './styled-components/Containers'
import { ContactSpaceLink } from './styled-components/SpaceLink'



function Contact() {


  return (
    <>
      <ColumnContainer id="contact" width="95vw">

          <h1>Get in touch!</h1>
        <RowContainer margin="3rem 0 0 0" id="contacts-list">


          <ContactSpaceLink margin="0 2rem">
              <Link to={'/email'}>Email</Link>
            </ContactSpaceLink>
            <ContactSpaceLink>
              <a href="https://www.linkedin.com/in/mae-may/" target='_blank' rel='noreferrer'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg" width="50" />
              </a>
            </ContactSpaceLink>
            <ContactSpaceLink margin="2rem 0">
              <a href="https://www.instagram.com/itsmemaemay/" target='_blank' rel='noreferrer'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/CIS-A2K_Instagram_Icon_%28Pink%29.svg" width="50" />
              </a>
            </ContactSpaceLink>
            <ContactSpaceLink margin="0 0 1rem 0">
              <a href="https://github.com/maemay85" target='_blank' rel='noreferrer'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg" width="50" />
              </a>
            </ContactSpaceLink>


        </RowContainer>
      </ ColumnContainer>
    </>
  )
}

export default Contact
