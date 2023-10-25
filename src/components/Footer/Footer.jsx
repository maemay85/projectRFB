import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  const language = props.language;
  return (
    <div id="footer">
      <div id='footer-nav'>
        <div className='footer-category'>
          <h3>LEARN</h3>
          <Link to='/About'>About</Link>
        </div>
        <div className='footer-category'>
          <h3>EXPLORE</h3>
          <Link to='/Resources'>Resources</Link>
        </div>
        <div className='footer-category'>
          <h3>CONNECT</h3>
          <Link to="/Contact">Contact</Link>
          <p>Follow us</p>
            <div id="footer-social-wrapper" className='row'>
              <a href="https://facebook.com/reuben.fullerbennett">
                <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/🦆 icon _facebook_.svg" />
              </a>
              <a href="https://instagram.com/reuben.esque/">
                <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/🦆 icon _instagram-alt_.svg" />
              </a>
              <a href="https://twitter.com/ReubenFull30474">
                <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/🦆 icon _twitter_.svg" />
              </a>
            </div>
          </div>
        </div>
        <div id='footer-footer'>
          <Link to='/Disclaimer'>Disclaimer</Link>
          <Link to='/PrivacyAndAccessibility'>Privacy & Accessibility</Link>
          <p>©Copyright 2023 Law Firm of Reuben Fuller-Bennett</p>
        </div>
      </div>
    )
  }

Footer.propTypes = {
  language: PropTypes.string
}

export default Footer;
