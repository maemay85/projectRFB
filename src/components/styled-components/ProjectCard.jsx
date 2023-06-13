import { styled } from "styled-components"
import { ColumnContainer } from "./Containers"
import { Link } from "react-router-dom"

const StyledProjectContainer = styled.div`
  & {
    position: relative;
    border: solid 1px rgba(150, 150, 150, 0.5);
    border-radius: 1rem;
    padding: 0.5rem;
    margin: 2rem;
    width: fit-content;
    color: #ccc;
  }
  &:hover {
    box-shadow: 0 0 1px 1px #ccc;

  }
`

const ProjectCard = (props) => {
  const text = props.text;
  const url = props.url;
  const tagline = props.tagline;
  return (
    <>
      <a href={url} target='_blank' rel='noreferrer'>
        <StyledProjectContainer>
          <h1>{text}</h1>
          <p>{tagline}</p>
        </StyledProjectContainer>
      </a>
    </>
  )
}

export default ProjectCard
