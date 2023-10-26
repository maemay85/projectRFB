import { PropTypes } from 'prop-types'
import Footer from './Footer/Footer'

const PrivacyAndAccessibility = (props) => {
const language = props.language

  return (
    <>
      <div id="privacy-page-container">

      <div id="privacy-header">
        {language==='english'?
        <h1>
          Privacy and Accessibility Statement
        </h1>
        :
        <h1>
          Declaracion de Privacidad & Accesibilidad
        </h1>}
      </div>
          <div id="privacy-page-content-container">
          <div id="privacy-page-text-wrapper">
            {language==='english' ?
            <>
                <p>Last Updated: October 2023</p>

                <p>{'Thank you for visiting the Law Firm of Reuben Fuller Bennett website (the "Website"). This Privacy and Accessibility Policy is designed to inform you about how we collect, use, disclose, and ensure accessibility for all users. By using this Website, you agree to the practices described in this policy.'}</p>

                <p><b>Privacy Policy</b></p>

                <p>1. INFORMATION WE COLLECT</p>

                <p>1.1 <i>Personal Information</i></p>

                <p>We collect the following personal information that you voluntarily provide:</p>

                <ul>
                  <li>Name: First and last name.</li>
                  <li>Email Address: To communicate with you and send updates.</li>
                  <li>Consultation Inquiry Field: Information provided in the consultation form.</li>
                </ul>

                <p>1.2 Automatically Collected Information</p>
                <p>We may collect certain information automatically, such as your IP address, browser type, operating system, referral URLs, pages viewed, and similar information for analytical purposes.</p>

                <p>2. USE OF INFORMATION</p>
                <p>We may use the information collected for the following purposes:</p>
                <ul>
                  <li>Responding to your inquiries and providing the information you request.</li>
                  <li>Sending updates, newsletters, and relevant information about housing law.</li>
                  <li>{`Analyzing and improving the Website's content and functionality.`}</li>
                  <li>Conducting research and statistical analysis.</li>
                  <li>Detecting, preventing, and addressing technical issues or fraud.</li>
                </ul>

                <p>3. DISCLOSURE OF INFORMATION</p>
                <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. However, we may share your information in the following circumstances:</p>
                <ul>
                 <li>With trusted third parties who assist us in operating the Website, conducting our business, or servicing you, provided they agree to keep this information confidential.</li>
                 <li>To comply with legal obligations or respond to lawful requests by public authorities.</li>
                </ul>

                <p>4. SECURITY</p>
                <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>

                <p>5. COOKIES AND TRACKING TECHNOLOGIES</p>
                <p>We may use cookies and similar tracking technologies to enhance your experience on the Website. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings.</p>

                <p>6. THIRD-PARTY LINKS</p>
                <p>The Website may contain links to third-party websites. We have no control over the privacy practices or the content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

                <p>{`7. CHILDREN'S POLICY`}</p>
                <p>This Website is not directed toward children under 13 years of age. We do not knowingly collect or maintain personal information from children.</p>

                <p><b>Accessibility Policy</b></p>
                <p>{`We are committed to ensuring that our website is accessible to everyone, including those with disabilities. We strive to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards.`}</p>

                <p>If you have any questions or concerns regarding this Privacy and Accessibility Policy, please contact us at: reuben@rfblaw.nyc</p>
              </>
              :
              <>
                   <p>Última actualización: octubre de 2023</p>

                   <p>{'Gracias por visitar el sitio web de Reuben Fuller Bennett Law Firm (el "Sitio web"). Esta Política de Privacidad y Accesibilidad está diseñada para informarle sobre cómo recopilamos, usamos, divulgamos y garantizamos la accesibilidad para todos los usuarios. Al utilizar este sitio web, acepta las prácticas descritas en esta política.'}</p>

                   <p><b>Política de Privacidad</b></p>

                   <p>1. INFORMACIÓN QUE RECOGEMOS</p>

                   <p>1.1 <i>Información personal</i></p>

                   <p>Recopilamos la siguiente información personal que usted proporciona voluntariamente:</p>

                   <ul>
                     <li>Nombre: Nombre y apellido.</li>
                     <li>Dirección de correo electrónico: para contactarlo y enviarle actualizaciones.</li>
                     <li>Campo de consulta: información proporcionada en el formulario de consulta.</li>
                   </ul>

                   <p>1.2 Información recopilada automáticamente</p>
                   <p>Podemos recopilar cierta información automáticamente, como su dirección IP, tipo de navegador, sistema operativo, URL de referencia, páginas visitadas e información similar con fines analíticos.</p>

                   <p>2. USO DE LA INFORMACIÓN</p>
                   <p>Podemos utilizar la información recopilada para los siguientes fines:</p>
                   <ul>
                     <li>Responder a tus consultas y proporcionarte la información que solicites.</li>
                     <li>Envío de actualizaciones, newsletters e información relevante sobre la ley de vivienda.</li>
                     <li>{`Analizar y mejorar el contenido y la funcionalidad del sitio web.`}</li>
                     <li>Realización de investigaciones y análisis estadísticos.</li>
                     <li>Detectar, prevenir y abordar problemas técnicos o fraudes.</li>
                   </ul>

                   <p>3. DIVULGACIÓN DE INFORMACIÓN</p>
                   <p>No vendemos, comercializamos ni transferimos de otro modo su información personal a terceros. Sin embargo, podemos compartir su información en las siguientes circunstancias:</p>
                   <ul>
                    <li>Con terceros de confianza que nos ayudan a operar el sitio web, realizar nuestro negocio o brindarle servicios, siempre que acepten mantener esta información confidencial.</li>
                    <li>Para cumplir con obligaciones legales o atender solicitudes legales de autoridades públicas.</li>
                   </ul>

                   <p>4. SEGURIDAD</p>
                   <p>Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal. Sin embargo, ningún método de transmisión a través de Internet o almacenamiento electrónico es completamente seguro y no podemos garantizar una seguridad absoluta.</p>

                   <p>5. COOKIES Y TECNOLOGÍAS DE SEGUIMIENTO</p>
                   <p>Podemos utilizar cookies y tecnologías de seguimiento similares para mejorar su experiencia en el sitio web. Puede elegir que su computadora le avise cada vez que se envía una cookie, o puede optar por desactivar todas las cookies a través de la configuración de su navegador.</p>

                   <p>6. ENLACES DE TERCEROS</p>
                   <p>El sitio web puede contener enlaces a sitios web de terceros. No tenemos control sobre las prácticas de privacidad o el contenido de estos sitios web. Le recomendamos que revise las políticas de privacidad de cualquier sitio de terceros que visite.</p>

                   <p>{`7. POLÍTICA INFANTIL`}</p>
                   <p>Este sitio web no está dirigido a niños menores de 13 años. No recopilamos ni mantenemos conscientemente información personal de niños.</p>

                   <p><b>Política de Accesibilidad</b></p>
                   <p>{`Estamos comprometidos a garantizar que nuestro sitio web sea accesible para todos, incluidos aquellos con discapacidades. Nos esforzamos por cumplir con los estándares de las Pautas de accesibilidad al contenido web (WCAG) 2.1 AA.`}</p>

                   <p>Si tiene alguna pregunta o inquietud con respecto a esta Política de privacidad y accesibilidad, comuníquese con nosotros a: reuben@rfblaw.nyc</p>
                 </>}
            </div>
        </div>

      </div>
    <Footer language={language} />
    </>
  )
}

PrivacyAndAccessibility.propTypes = {
  language: PropTypes.string
}

export default PrivacyAndAccessibility
