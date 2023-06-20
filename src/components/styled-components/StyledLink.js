import styled from "styled-components";

export const StyledLink = styled.div`
  & {
    position: relative;
    border: solid 1px rgba(50, 50, 50, 0.5);
    border-radius: 1rem;
    padding: 0.5rem;
    margin: 0;
    cursor: pointer;
    width: fit-content;
    color: #222;
    z-index: 2;
  }
  &:hover {
    box-shadow: 0 0 1px 1px #200;

  }
  &:hover a {
    color: #200;
  }
`;

export const ContactStyledLink = styled.div`
  & {
    position: relative;
    font-size: 1.5rem;
    border: solid 1px rgba(50, 50, 50, 0.5);
    border-radius: 1rem;
    padding: 0.5rem;
    margin: ${(props) => (props.margin ? props.margin : "0")};
    cursor: pointer;
    width: fit-content;
    color: #222;
    z-index: 2;
  }
  &:hover {
    box-shadow: 0 0 1px 1px #200;

  }
  &:hover a {
    color: #200;
  }
`;

