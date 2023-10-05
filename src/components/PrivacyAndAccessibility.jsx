import { PropTypes } from 'prop-types'
import Contact from './Contact/Contact'

function PrivacyAndAccessibility(props) {
const language = props.language

  return (
    <>
      <div id="disclaimer-page-container">

      <div id="disclaimer-page-header">
        {language==='english'?
        <h1>
          Privacy and Accessibility Statement
        </h1>
        :
        <h1>
          Declaracion de Privacidad & Accesibilidad
        </h1>}
      </div>
          <div id="disclaimer-page-content-container">
          <div id="disclaimer-page-text-wrapper">
            {language==='english' ?
            <>
                <p> This site does not gather data except for that which you choose to share through the contact email form. Your data is never shared with third parties, and is protected by rigorous industry-standard security safeguards.</p>
                <p>Encountered an accessibility issue? Reach out for swift resolution. Check this page for any statement updates. Questions? Contact us below! Your privacy and accessibility matter.</p>
              </>
              :
              <>
                <p> Este sitio no recopila datos excepto los que usted elige compartir a través del formulario de correo electrónico de contacto. Sus datos nunca se comparten con terceros y están protegidos por rigurosas medidas de seguridad estándar de la industria.</p>
                <p>¿Encontró algún problema de accesibilidad? Por favor contáctenos para una resolución rápida. Consulte esta página para obtener actualizaciones de los estados de cuenta. ¿Preguntas? ¡Contáctenos a continuación! Su privacidad y accesibilidad son importantes.</p>
              </>}
            </div>
        </div>

      </div>
    <Contact language={language} />
    </>
  )
}

PrivacyAndAccessibility.propTypes = {
  language: PropTypes.string
}

export default PrivacyAndAccessibility
