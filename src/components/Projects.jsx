import { ColumnContainer, RowContainer } from "./styled-components/Containers"
import ProjectCard from "./styled-components/ProjectCard"



const Projects = () => {
  const projects = [
    {
      title: 'augmentEd',
      tagline: 'a peer-to-peer music teaching web application',
      url: 'https://augmented.onrender.com/'
    },

    {
      title: 'planet quackathon',
      tagline: 'a static educational web application about our solar system - built in collaboration with Madeleine Lloyd-Davies, Rachel Eckert, and Lindsay Powell',
      url: "https://welp-y6ke.onrender.com/"
    },
    {
      title: 'dropdown sounds',
      tagline: 'work in process: dropdown sounds will be an interactive music theory teaching tool, allowing curious people to explore keys, chords, and scales with an engaging dropdown-menu-oriented interface',
      url: 'https://github.com/maemay85/dropdownSounds'
    },
  ]


  return (
    <>
      <ColumnContainer width='100vw'>
        {projects.map((project)=>{
          return (
            <ProjectCard
              key={project.title}
              text={project.title}
              url={project.url}
              tagline={project.tagline}
            />
          )
        })

        }
      </ColumnContainer>
    </>
  )
}

export default Projects
