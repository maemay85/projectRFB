
import { ColumnContainer, TopNav } from '../styled-components/Containers';
import { StyledLink } from '../styled-components/StyledLink';
import { Link } from 'react-router-dom';


function Nav() {


  return (
    <>
      <TopNav width='96vw' margin="0 2vw " id='top-nav'>

        <Link to={'/'}>
          <h1>Reuben Fuller Bennett</h1>
        </Link>
        <StyledLink>
          <Link to={'/tenantresources'}>tenant resources</Link>
        </StyledLink>
        <StyledLink>
          <Link to={'/about'}>about</Link>
        </StyledLink>
        <StyledLink>
          <Link to={'/contact'}>contact</Link>
        </StyledLink>

      </TopNav>

    </>
  )
}

export default Nav
