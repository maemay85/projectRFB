import { PropTypes } from 'prop-types';

const Top = (props) => {
  const language = props.language;

  return (
    <>
      <div id="top-container" className="column">
        {language === 'english' ?
          <div id="top-wrapper" className="column">

            <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/light_gradient map 1.png" />



            <div id='top-text-top-lines'><h1>You have rights at home,<br/>but it’s up to you to enforce them. </h1></div>
            <div id='top-text-bottom-line'><h1>Reuben can help.</h1></div>

          </div>
          :
          <div id="top-wrapper" className="column">

            <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/light_gradient map 1.png" />

            <div id='top-text-top-lines'><h1>Tienes derechos en casa, <br/>pero depende de ti hacerlos cumplir. </h1></div>
            <div id='top-text-bottom-line'><h1>Reuben puede ayudar.</h1></div>

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
