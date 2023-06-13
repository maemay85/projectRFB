
import React from 'react';
import { RowContainer } from '../styled-components/Containers';
import SpaceLink from '../styled-components/SpaceLink';
import { Link } from 'react-router-dom';


function Nav() {


  return (
    <>
      <RowContainer width='96vw' margin="0 2vw ">
        <h1>mae may</h1>
        <SpaceLink>
          <Link to={'/'}>home</Link>
        </SpaceLink>
        <SpaceLink>
          <Link to={'/about'}>about</Link>
        </SpaceLink>
        <SpaceLink>
          <a href ="https://github.com/maemay85" target='_blank' rel='noreferrer'>github</a>
        </SpaceLink>
        <SpaceLink>
          <a href="https://maemaywoodworking.com" target='_blank' rel='noreferrer'>woodworking</a>
        </SpaceLink>
        <SpaceLink>
          <a href="https://maemay.art" target='_blank' rel='noreferrer'>performance</a>
        </SpaceLink>

      </RowContainer>
    </>
  )
}

export default Nav
