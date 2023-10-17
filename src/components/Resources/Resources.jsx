import Contact from "../Contact/Contact";
import ResourceCard from "./ResourceCard"
import { PropTypes } from 'prop-types'


const Resources = (props) => {

  const language = props.language;

  const resources =
    {
      english: [
        {
          title: 'Resource One',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Resource 1.png'
        },

        {
          title: 'Resource Two',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Resource 2.png'
        },
        {
          title: 'Resource Three',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Resource 3.png'
        },

        {
          title: 'Resource Four',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Resource 4.png'
        },

        {
          title: 'Resource Five',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Resource 5.png'
        },

        {
          title: 'Resource Six',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Resource 6.png'
        },

        {
          title: 'Resource Seven',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Resource 7.png'
        },

        {
          title: 'Resource Eight',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Resource 8.png'
        },

        {
          title: 'Resource Nine',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Resource 9.png'
        }],

        español: [
          {
            title: 'recurso uno',
            category: 'CATEGORÍA',
            url: 'url del recurso',
            imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Resource 1.png'
          },
          {
            title: 'CATEGORÍA',
            category: 'url del recurso',
            imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Resource 2.png'
          },
          {
            title: 'recurso tres',
            category: 'CATEGORÍA',
            url: 'url del recurso',
            imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Resource 3.png'
          }
        ]
    }

  return (
    <>
      <div id="resources-page-container" className="column">
      { language === 'english' ?
        <div id="resources-heading-wrapper" className="column">

          <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/light_gradient map 1.png" />



          <h1>You have rights at home, but it’s up to you to enforce them. <br/>Reuben can help.</h1>
          <div className="page-description-container column">
            <h2>EXPLORE RESOURCES</h2>
            <p>Here you will find resources, organizations and tools  to support you in understanding and advocating for your rights. </p>
          </div>
        </div>
        :
        <div id="resources-heading-wrapper" className="column">

          <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/beautiful-view-city-buildings_duotone 1.png" />


          <h1>Tienes derechos en casa, pero depende de ti hacerlos cumplir. <br/>Reuben puede ayudar.</h1>
          <div className="page-description-container column">
            <h2>EXPLORAR RECURSOS</h2>
             <p>Aquí encontrará recursos, organizaciones y herramientas que le ayudarán a comprender y defender sus derechos. </p>
          </div>
        </div>
      }


        <div id="resources-grid-container">
        { language === 'english' ?
          resources.english.map((resource)=>{
            return (
              <ResourceCard
                key={resource.title}
                text={resource.title}
                url={resource.url}
                category={resource.category}
                imageUrl={resource.imageUrl}
              />
            )
          }) :
          resources.español.map((resource)=>{
            return (
              <ResourceCard
                key={resource.title}
                text={resource.title}
                url={resource.url}
                category={resource.category}
                imageUrl={resource.imageUrl}
              />
            )
          })

         }</div>
      </div>
      <Contact language={language} />
    </>
  )
}

Resources.propTypes = {
  language: PropTypes.string
}

export default Resources
