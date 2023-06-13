import { ColumnContainer, RowContainer } from "./styled-components/Containers"
import ProjectCard from "./styled-components/ProjectCard"



const Projects = () => {
  const projects = [
    {
      title: 'augmentEd',
      tagline: 'A peer-to-peer music teaching web application. Built in collaboration with Shoshana Levit, Rachel Cora Wood, and Zoe Moersch. *** Please note that this site is deployed on a free service, and the server is slow, so it can take a while to load ***',
      url: 'https://augmented.onrender.com/',
      imageUrl: 'https://github.com/maemay85/maeMayPortfolioSite/blob/main/src/assets/augmented%20thumbnail.png?raw=true'
    },

    {
      title: 'W.E.L.P. (We Effing Love Planets)',
      tagline: 'A static educational web application about our solar system - built in collaboration with Madeleine Lloyd-Davies, Rachel Eckert, and Lindsay Powell',
      url: "https://welp-y6ke.onrender.com/",
      imageUrl: 'https://github.com/maemay85/maeMayPortfolioSite/blob/main/src/assets/welp%20thumbnail.png?raw=true'
    },
    {
      title: 'dropdown sounds',
      tagline: 'Work in progress: dropdown sounds will be an interactive music theory teaching tool, allowing curious people to explore keys, chords, and scales with an engaging dropdown-menu-oriented interface',
      url: 'https://github.com/maemay85/dropdownSounds',
      imageUrl: 'https://github.com/maemay85/maeMayPortfolioSite/blob/main/src/assets/dropdown%20thumbnail.png?raw=true'
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
              imageUrl={project.imageUrl}
            />
          )
        })

        }
      </ColumnContainer>
    </>
  )
}

export default Projects
