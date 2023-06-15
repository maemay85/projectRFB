
import EmailContactForm from './EmailContactForm'
import { ColumnContainer, RowContainer } from './styled-components/Containers'



function Contact() {


  return (
    <>
      <ColumnContainer id="contact" width="95vw">

          <h1>Get in touch:</h1>
        <RowContainer id="contacts-list">
          <EmailContactForm />
        </RowContainer>
      </ ColumnContainer>
    </>
  )
}

export default Contact
