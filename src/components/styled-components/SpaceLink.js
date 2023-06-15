import styled from "styled-components";

export const SpaceLink = styled.div`
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
    box-shadow: 0 0 1px 1px #fcf8d6;

  }
  &:hover a {
    color: #fcf8d6;
  }
`;

export const ContactSpaceLink = styled.div`
  & {
    position: relative;
    font-size: 1.5rem;
    border: solid 1px rgba(150, 150, 150, 0.5);
    border-radius: 1rem;
    padding: 0.5rem;
    margin: ${(props) => (props.margin ? props.margin : "0")};
    cursor: pointer;
    width: fit-content;
    color: #ccc;
    z-index: 2;
  }
  &:hover {
    box-shadow: 0 0 1px 1px #fcf8d6;

  }
  &:hover a {
    color: #fcf8d6;
  }
`;

