import ResourceCard from "./ResourceCard"
import { PropTypes } from 'prop-types'
import resourceData from "../../assets/resourceData";


const Resources = (props) => {

  const language = props.language;
  const resources = resourceData

  return (
    <>
        <div id="resources-grid-container">

        <>
        <div className="title">
          <h1>{language === 'english' ? 'RESOURCES' : 'RECURSOS'}</h1>
        </div>
          {resources.map((resource)=>{
            return (
              <ResourceCard
                key={resource.title.english}
                title={language === 'english' ? resource.title.english : resource.title.español}
                text={language === 'english' ? resource.body.english : resource.body.español}
                imageUrl={resource.imageUrl}
              />
            )})
          }
          </>

         </div>


    </>
  )
}

Resources.propTypes = {
  language: PropTypes.string
}

export default Resources
