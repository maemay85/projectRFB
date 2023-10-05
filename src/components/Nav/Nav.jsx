import { Link } from 'react-router-dom';
import {PropTypes} from 'prop-types';

function Nav(props) {

  const handleLanguageChange = props.handleLanguageChange;
  const language = props.language;

  return (
    <>
      <div id='top-nav-container'>

        <Link to={'/'} id="site-title" className='row'>
          <div id="site-logo" className='column'>
            <div className='grayline'></div>
            <div className='grayline'></div>
            <div className='redline'></div>
            <div className='redline'></div>
            <div className='grayline'></div>
            <div className='grayline'></div>
          </div>
          <div id="site-title-text" className='column'>Law Firm of<br/>Reuben Fuller-Bennett</div>
        </Link>

        <div id="nav-link-wrapper" className='row'>
          <Link to={'/resources'}>{language === 'english' ? 'RESOURCES' : 'RECURSOS'}</Link>

          <Link to={'/about'}>{language === 'english' ? 'ABOUT' : 'ACERCA'}</Link>

          {/* <Link to={'/blog'}>BLOG</Link> */}

          <Link to={'/contact'}>{language === 'english' ? 'CONTACT' : 'CONTACTOS'}</Link>

          {/* <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/search.svg" id="search-icon"/> */}
        </div>

        <div id="nav-language-toggle" className='row'>
          <span>
            <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/language.svg" id="language-icon"/>
          </span>
          <span className={language==='english'? 'selected' : null} onClick={(e) => handleLanguageChange(e)}>ENGLISH</span>|
          <span className={language==='español'? 'selected' : null} onClick={(e) => handleLanguageChange(e)}>ESPAÑOL</span>
        </div>

      </div>

    </>
  )
}

Nav.propTypes = {
  handleLanguageChange: PropTypes.func,
  language: PropTypes.string
}

export default Nav
