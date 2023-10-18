import { PropTypes } from 'prop-types';

const Top = (props) => {
  const language = props.language;

  return (
    <>
      <div id="resources-page-container" className="column">
        {language === 'english' ?
          <div id="resources-heading-wrapper" className="column">

            <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/light_gradient map 1.png" />



            <h1>You have rights at home, but it’s up to you to enforce them. <br/>Reuben can help.</h1>

          </div>
          :
          <div id="resources-heading-wrapper" className="column">

            <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/light_gradient map 1.png" />


            <h1>Tienes derechos en casa, pero depende de ti hacerlos cumplir. <br/>Reuben puede ayudar.</h1>

          </div>
        }
      </div>
    </>
  )
}

Top.propTypes = {
  language: PropTypes.string
}

export default Top;
