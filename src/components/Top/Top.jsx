import { PropTypes } from 'prop-types';

const Top = (props) => {
  const language = props.language;

  return (
    <>
      <div id="top-container" className="column">

        {language === 'english' ?

          <div id="top-text-wrapper" className="column">

            <div id='top-text-top-lines'><h2>You have rights at home,<br/>but it’s up to you to enforce them. </h2></div>
            <div id='top-text-bottom-line'><h1>Reuben can help.</h1></div>

          </div>
          :
          <div id="top-text-wrapper" className="column">

            <div id='top-text-top-lines'><h2>Tienes derechos en casa, <br/>pero depende de ti hacerlos cumplir. </h2></div>
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
