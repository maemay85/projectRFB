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
    width: 20rem;
    color: #ccc;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  &:hover {
    box-shadow: 0 0 1px 1px #ccc;

  }
`

const ProjectCard = (props) => {
  const text = props.text;
  const url = props.url;
  const tagline = props.tagline;
  const imageUrl = props.imageUrl
  return (
    <>
      <a href={url} target='_blank' rel='noreferrer'>
        <StyledProjectContainer>
          <h1>{text}</h1>
          <div className="image-container">
            <img src={imageUrl} />
          </div>
          <p>{tagline}</p>

        </StyledProjectContainer>
      </a>
    </>
  )
}

export default ProjectCard
