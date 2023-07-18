import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  flex-direction: row;
  border: ${(props) =>
    props.border ? `1px solid rgba(150, 150, 150, 0.5)` : null};
  border-radius: 5vh;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  z-index: 3;
`;

export const ColumnContainer = styled.div`
  display: flex;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: space-between;
  position: ${(props) => (props.position ? props.position : "relative")};
  flex-direction: column;
  border: ${(props) =>
    props.border ? `1px solid rgba(150, 150, 150, 0.5)` : null};
  border-radius: 5vh;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  z-index: 3;
`;

/* export const BottomNav = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: fixed;
  top: 79%;
  right: 1%;
  flex-direction: row;
  border: ${(props) =>
    props.border ? `1px solid rgba(150, 150, 150, 0.5)` : null};
  border-radius: 5vh;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  z-index: 4;
`; */

export const TopNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  background-color: var(--three);
  top: 7%;
  left: 15%;
  flex-direction: row;
  border: ${(props) =>
    props.border ? `1px solid rgba(150, 150, 150, 0.5)` : null};
  margin: 0;
  padding: ${(props) => (props.padding ? props.padding : "0")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  z-index: 4;
`;
