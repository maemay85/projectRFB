import { PropTypes } from 'prop-types'


function About(props) {
const language = props.language

  return (
    <>
      <div id="about-page-container">

          <div id="about-page-background-image">
            <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/unseen-histories-GBwEIHq1Imw-unsplash_duotone 2.png" />
          </div>
          <div id="about-page-content-container">
            <div id="about-page-headshot-image">
            <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/headshot.png" />
          </div>
          <div id="about-page-text-wrapper">
            {language==='english' ?
            <>
                <p>Our housing system is totally broken. Housing should be recognized as a human right but, until it is, we’ve got to play the cards we’ve been dealt. New York City has relatively robust protections for tenants. So often, tenants’ rights are trampled on by uncaring or even abusive landlords. With the resources on this site, and Reuben’s help, you can take back what you’re due. </p>

                <p>Reuben founded the firm in 2021 to assist tenants with their housing rights issues. He’s committed to helping tenants to understand and enforce their rights even if money is tight. That’s why he offers the free resources available on this site, free consultations, and flexible payment and representation options.  </p>
                <p>Reuben has worked as a New York City tenants’ attorney since 2015, both in private practice and legal services. </p>
              </>
              :
              <>
                <p>Nuestro sistema de vivienda está totalmente roto. La vivienda debe ser reconocida como un derecho humano pero, hasta que lo sea, tenemos que jugar las cartas que nos han repartido. La ciudad de Nueva York tiene protecciones relativamente fuertes para los inquilinos. Con demasiada frecuencia, los derechos de los inquilinos son pisoteados por propietarios indiferentes o incluso abusivos. Con los recursos de este sitio y la ayuda de Reuben, puede recuperar lo que se le debe.</p>

                <p>Reuben fundó la firma en 2021 para ayudar a los inquilinos con sus problemas de derecho a la vivienda. Está comprometido a ayudar a los inquilinos a comprender y hacer cumplir sus derechos incluso si hay escasez de dinero. Es por eso que ofrece los recursos gratuitos disponibles en este sitio, consultas gratuitas y opciones flexibles de pago y representación. </p>

                <p>Reuben ha trabajado como abogado de inquilinos de la ciudad de Nueva York desde 2015, tanto en la práctica privada como en servicios legales.</p>
              </>}
            </div>
        </div>

      </div>

    </>
  )
}

About.propTypes = {
  language: PropTypes.string
}

export default About
