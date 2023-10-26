import ResourcePreview from "./ResourcePreview"
import { PropTypes } from 'prop-types'
import resourceData from "../../assets/resourceData";


const Resources = (props) => {

  const language = props.language;
  const resources = resourceData;
  let oddEven = 'odd';

  return (
    <>
        <div id="resources-grid-container">

        <>
        <div className="title">
          <h1>{language === 'english' ? 'RESOURCES' : 'RECURSOS'}</h1>
        </div>
          {resources.map((resource)=>{
            oddEven === 'odd' ? oddEven='even' : oddEven='odd'
            return (
              <ResourcePreview
                key={resource.title.english}
                title={language === 'english' ? resource.title.english : resource.title.español}
                text={language === 'english' ? resource.body.english : resource.body.español}
                url={resource.url}
                imageUrl={resource.imageUrl}
                language={language}
                oddEven={oddEven}
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
