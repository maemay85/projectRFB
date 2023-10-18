import ResourceCard from "./ResourceCard"
import { PropTypes } from 'prop-types'
import resourceData from "../../assets/resourceData";


const Resources = (props) => {

  const language = props.language;
  const resources = resourceData

  return (
    <>
        <div id="resources-grid-container">
        { language === 'english' ?
        <>
        <div className="title">
          <h1>RESOURCES</h1>
        </div>
          {resources.english.map((resource)=>{
            return (
              <ResourceCard
                key={resource.title}
                text={resource.title}
                url={resource.url}
                category={resource.category}
                imageUrl={resource.imageUrl}
              />
            )})
          }
          </>
           :
           <>
           <div className="title">
             <h1>RECURSOS</h1>
           </div>
             {resources.español.map((resource)=>{
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
        }
</>
         }</div>


    </>
  )
}

Resources.propTypes = {
  language: PropTypes.string
}

export default Resources
