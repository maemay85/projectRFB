import styled from "styled-components";

const SpaceLink = styled.div`
  & {
    position: relative;
    border: solid 1px rgba(150, 150, 150, 0.5);
    border-radius: 1rem;
    padding: 0.5rem;
    margin: 0;
    cursor: pointer;
    width: fit-content;
    color: #ccc;
    z-index: 2;
  }
  &:hover {
    box-shadow: 0 0 1px 1px #ccc;
    transition: ease-in-out 0.15s;
  }
  & a {
    color: #ccc;
  }
`;

export default SpaceLink;
