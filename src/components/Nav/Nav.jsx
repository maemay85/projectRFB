import { Link } from 'react-router-dom';
import { TopNav } from '../styled-components/Containers';


function Nav() {


  return (
    <>
      <TopNav width='80vw' id='top-nav'>

        <Link to={'/'} id="site-title" className="title">
          Law Firm of<br/>Reuben Fuller-Bennett
        </Link>

        <Link to={'/tenantresources'}>resources</Link>

        <Link to={'/about'}>about</Link>

        <Link to={'/contact'}>contact</Link>


      </TopNav>

    </>
  )
}

export default Nav
