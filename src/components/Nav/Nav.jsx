
import React from 'react';
import { BottomNav, RowContainer, TopNav } from '../styled-components/Containers';
import SpaceLink from '../styled-components/SpaceLink';
import { Link } from 'react-router-dom';


function Nav() {


  return (
    <>
      <TopNav width='96vw' margin="0 2vw " id='top-nav'>

        <Link to={'/'}>
          <h1>mae may</h1>
        </Link>
        <SpaceLink>
          <Link to={'/projects'}>projects</Link>
        </SpaceLink>
        <SpaceLink>
          <Link to={'/about'}>about</Link>
        </SpaceLink>

      </TopNav>
      <BottomNav>
        <SpaceLink>
          <a href ="https://github.com/maemay85" target='_blank' rel='noreferrer'>github</a>
        </SpaceLink>
        <SpaceLink>
          <a href="https://maemaywoodworking.com" target='_blank' rel='noreferrer'>woodworking</a>
        </SpaceLink>
        <SpaceLink>
          <a href="https://maemay.art" target='_blank' rel='noreferrer'>performance</a>
        </SpaceLink>
      </BottomNav>
    </>
  )
}

export default Nav
