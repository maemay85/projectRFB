import styled from "styled-components";

export const StyledLink = styled.div`
  & {
    position: relative;
    padding: 0;
    margin: ${(props) => (props.margin ? props.margin : "0")};
    cursor: pointer;
    width: fit-content;
    z-index: 2;
  }
  &:hover {
    text-decoration: underline;

  }
`;
/* NOT IN USE
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
    z-index: 2;
  }
  &:hover {
    box-shadow: 0 0 1px 1px #200;

  }

`;
*/
