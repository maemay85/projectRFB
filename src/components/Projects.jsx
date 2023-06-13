import { ColumnContainer, RowContainer } from "./styled-components/Containers"
import ProjectCard from "./styled-components/ProjectCard"



const Projects = () => {
  const projects = ['project one', 'project two', 'project three']


  return (
    <>
      <ColumnContainer width='100vw'>
        {projects.map((project)=>{
          return (
            <ProjectCard key={project} />
          )
        })

        }
      </ColumnContainer>
    </>
  )
}

export default Projects
