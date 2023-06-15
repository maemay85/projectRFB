
import { Link } from 'react-router-dom'
import EmailContactForm from './EmailContactForm'
import { ColumnContainer, RowContainer } from './styled-components/Containers'
import SpaceLink from './styled-components/SpaceLink'



function Contact() {


  return (
    <>
      <ColumnContainer id="contact" width="95vw">

          <h1>Let's get in touch!</h1>
        <RowContainer id="contacts-list">

          <ColumnContainer id="connect">
            <SpaceLink>
              <a href="https://www.linkedin.com/in/mae-may/" target='_blank' rel='noreferrer'>LinkedIn</a>
            </SpaceLink>
            <SpaceLink>
              <a href="https://www.instagram.com/itsmemaemay/" target='_blank' rel='noreferrer'>Instagram</a>
            </SpaceLink>
            <SpaceLink>
              <a href="https://github.com/maemay85" target='_blank' rel='noreferrer'>GitHub</a>
            </SpaceLink>
            <SpaceLink>
              <Link to={'/email'}>Email</Link>
            </SpaceLink>
          </ColumnContainer>
        </RowContainer>
      </ ColumnContainer>
    </>
  )
}

export default Contact
