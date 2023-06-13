import { styled } from "styled-components"
import { ColumnContainer } from "./Containers"

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

const ProjectCard = () => {
  return (
    <>
      <StyledProjectContainer>
        <h1>this is a project card</h1>
      </StyledProjectContainer>
    </>
  )
}

export default ProjectCard
