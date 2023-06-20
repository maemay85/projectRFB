
import { BottomNav, ColumnContainer, TopNav } from '../styled-components/Containers';
import { StyledLink } from '../styled-components/StyledLink';
import { Link } from 'react-router-dom';


function Nav() {


  return (
    <>
      <TopNav width='96vw' margin="0 2vw " id='top-nav'>

        <Link to={'/'}>
          <h1>mae may</h1>
        </Link>
        <StyledLink>
          <Link to={'/projects'}>projects</Link>
        </StyledLink>
        <StyledLink>
          <Link to={'/about'}>about</Link>
        </StyledLink>
        <StyledLink>
          <Link to={'/contact'}>contact</Link>
        </StyledLink>

      </TopNav>
      <BottomNav>
        <ColumnContainer>
          <StyledLink>
            <a href ="https://github.com/maemay85" target='_blank' rel='noreferrer'>github</a>
          </StyledLink>
          <StyledLink>
            <a href="https://maemaywoodworking.com" target='_blank' rel='noreferrer'>woodworking</a>
          </StyledLink>
          <StyledLink>
            <a href="https://maemay.art" target='_blank' rel='noreferrer'>performance</a>
          </StyledLink>
        </ColumnContainer>
      </BottomNav>
    </>
  )
}

export default Nav
