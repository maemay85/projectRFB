import { ColumnContainer, ImgContainer } from "./styled-components/Containers"
import ResourceCard from "./styled-components/ResourceCard"
import { PropTypes } from 'prop-types'


const TenantResources = (props) => {

  const language = props.language;

  const tenantResources =
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
      <ColumnContainer id="tenant-resources-content" margin='10rem 0 0 0' width='100vw'>
        <ImgContainer id="city-background" left="-2%">
          <img src="src/assets/beautiful-view-city-buildings_duotone 1.png" />
        </ImgContainer>
        <div id="tenant-resources-heading-wrapper">
          <h1>HOUSING FOR PEOPLE, <br/>
          NOT FOR PROFIT.</h1>
          <div className="page-description-container column">
            <h2>EXPLORE RESOURCES</h2>
            <p>Here you will find resources, organizations and tools  to support you in understanding and advocating for your rights. </p>
        </div>
        </div>

        <ColumnContainer id="tenant-resources-cards" position="absolute" top="100%" left="50%">
        {/* {language === 'english' ?
          tenantResources.english.map((resource)=>{
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
          tenantResources.español.map((resource)=>{
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

        } */}</ ColumnContainer>
      </ColumnContainer>
    </>
  )
}

TenantResources.propTypes = {
  language: PropTypes.string
}

export default TenantResources
