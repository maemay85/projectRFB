import ResourceCard from "./ResourceCard"
import { PropTypes } from 'prop-types'


const Resources = (props) => {

  const language = props.language;

  const resources =
    {
      english: [
        {
          title: 'resource one',
          tagline: 'A brief description of this resource for tenants',
          url: 'url of the resource',
          imageUrl: 'image url for the resource'
        },

        {
          title: 'resource two',
          tagline: 'A brief description of this resource for tenants',
          url: 'url of the resource',
          imageUrl: 'image url for the resource'
        },
        {
          title: 'resource three',
          tagline: 'A brief description of this resource for tenants',
          url: 'url of the resource',
          imageUrl: 'image url for the resource'
        }],

        español: [
          {
            title: 'recurso uno',
            tagline: 'Una breve descripción de este recurso para inquilinos',
            url: 'url del recurso',
            imageUrl: 'url de imagen para el recurso'
          },
          {
            title: 'Una breve descripción de este recurso para inquilinos',
            tagline: 'url del recurso',
            imageUrl: 'url de imagen para el recurso'
          },
          {
            title: 'recurso tres',
            tagline: 'Una breve descripción de este recurso para inquilinos',
            url: 'url del recurso',
            imageUrl: 'url de imagen para el recurso'
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

        <div id="resources-grid-container" className="column">
        { language === 'english' ?
          resources.english.map((resource)=>{
            return (
              <ResourceCard
                key={resource.title}
                text={resource.title}
                url={resource.url}
                tagline={resource.tagline}
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
                tagline={resource.tagline}
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
