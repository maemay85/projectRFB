import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  const language = props.language;
  return (

      <div id="footer">
          <div><Link to={'/privacy-and-accessibility'}>{language === 'english' ? 'Privacy & Accessibility' : 'Privacidad & Accesibilidad'}</Link></div>
          <div>
            <Link to={'/disclaimer'}>{language === 'english' ? 'Disclaimer' : 'Descargo de responsabilidad'}</Link>
          </div>
          {/* <div>Sitemap</div> */}
          <div>{language === "english" ? "Copyright 2023 RFB" : "Derechos de Autor 2023 RFB"}</div>
        </div>

  )
}

Footer.propTypes = {
  language: PropTypes.string
}

export default Footer;
