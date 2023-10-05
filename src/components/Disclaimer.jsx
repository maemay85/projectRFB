import { PropTypes } from 'prop-types'
import Contact from './Contact/Contact'

function Disclaimer(props) {
const language = props.language

  return (
    <>
      <div id="disclaimer-page-container">

      <div id="disclaimer-page-header">
        {language==='english'?
        <h1>
          Disclaimer
        </h1>
        :
        <h1>
          Descargo de responsabilidad
        </h1>}
      </div>
          <div id="disclaimer-page-content-container">
          <div id="disclaimer-page-text-wrapper">
            {language==='english' ?
            <>
                <p> The information you obtain at this site is not, nor is it intended to be, legal advice. You should consult an attorney for advice regarding your individual situation. We invite you to contact us and welcome your calls, letters and electronic mail. Contacting us does not create an attorney-client relationship. Please do not send any confidential information to us until such time as an attorney-client relationship has been established.</p>
              </>
              :
              <>
                <p>La información que obtiene en este sitio no es asesoramiento legal ni pretende serlo. Debe consultar a un abogado para obtener asesoramiento sobre su situación individual. Le invitamos a contactarnos por correo electrónico, teléfono o escribiendo una carta. Contactarnos no crea una relación abogado-cliente. No nos envíe ninguna información confidencial hasta que se haya establecido una relación abogado-cliente.</p>
              </>}
            </div>
        </div>

      </div>
    <Contact language={language} />
    </>
  )
}

Disclaimer.propTypes = {
  language: PropTypes.string
}

export default Disclaimer
