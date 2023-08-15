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
          imageUrl: 'src/assets/Resource 1.png'
        },

        {
          title: 'Resource Two',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'src/assets/Resource 2.png'
        },
        {
          title: 'Resource Three',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'src/assets/Resource 3.png'
        },

        {
          title: 'Resource Four',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'src/assets/Resource 4.png'
        },

        {
          title: 'Resource Five',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'src/assets/Resource 5.png'
        },

        {
          title: 'Resource Six',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'src/assets/Resource 6.png'
        },

        {
          title: 'Resource Seven',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'src/assets/Resource 7.png'
        },

        {
          title: 'Resource Eight',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'src/assets/Resource 8.png'
        },

        {
          title: 'Resource Nine',
          category: 'CATEGORY',
          url: 'url of the resource',
          imageUrl: 'src/assets/Resource 9.png'
        }],

        español: [
          {
            title: 'recurso uno',
            category: 'CATEGORÍA',
            url: 'url del recurso',
            imageUrl: 'src/assets/Resource 1.png'
          },
          {
            title: 'CATEGORÍA',
            category: 'url del recurso',
            imageUrl: 'src/assets/Resource 2.png'
          },
          {
            title: 'recurso tres',
            category: 'CATEGORÍA',
            url: 'url del recurso',
            imageUrl: 'src/assets/Resource 3.png'
          }
        ]
    }

  return (
    <>
      <div id="resources-page-container" className="column">
      <div id="resources-heading-wrapper" className="column">

          <img src="src/assets/beautiful-view-city-buildings_duotone 1.png" />


          <h1>HOUSING FOR PEOPLE, <br/>
          NOT FOR PROFIT.</h1>
          <div className="page-description-container column">
            <h2>EXPLORE RESOURCES</h2>
            <p>Here you will find resources, organizations and tools  to support you in understanding and advocating for your rights. </p>
          </div>
        </div>

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
    </>
  )
}

Resources.propTypes = {
  language: PropTypes.string
}

export default Resources
