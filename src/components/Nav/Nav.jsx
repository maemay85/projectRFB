import { Link } from 'react-router-dom';
import { TopNav } from '../styled-components/Containers';


function Nav() {


  return (
    <>
      <TopNav width='80vw' id='top-nav'>

        <Link to={'/'} id="site-title" className="title">
          <div id="site-logo" className='column'>
            <div className='grayline'></div>
            <div className='grayline'></div>
            <div className='redline'></div>
            <div className='redline'></div>
            <div className='grayline'></div>
            <div className='grayline'></div>
          </div>
          <div id="site-title-text-wrapper" className='column'>Law Firm of<br/>Reuben Fuller-Bennett</div>
        </Link>

        <div id="nav-link-wrapper" className='row'>
          <Link to={'/tenantresources'}>RESOURCES</Link>

          <Link to={'/about'}>ABOUT</Link>

          <Link to={'/blog'}>BLOG</Link>

          <Link to={'/contact'}>CONTACT</Link>

          <img src="src/assets/search.svg" id="search-icon"/>
        </div>

        <div id="nav-language-toggle" className='row'>
          <span>
            <img src="src/assets/language.svg" id="language-icon"/>
          </span>
          <span className='selected'>ENGLISH</span>
          <span> ESPAÑOL</span>
        </div>

      </TopNav>

    </>
  )
}

export default Nav
