
import { PropTypes } from 'prop-types'



const ResourcePreview = (props) => {
  const text = props.text;
  const title = props.title;
  const imageUrl = props.imageUrl;
  return (

    <div className="resource-preview-container">

      <div className='resource-preview-image'>
          <img src={`${imageUrl}`} />
      </div>

      <div className='resource-preview-body'>
        <div className='resource-preview-title'>{title}</div>
        <div className='resource-preview-text'>{text}</div>
        <div>... READ MORE</div>
      </div>
    </div>
  )
}

ResourcePreview.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string
}

export default ResourcePreview
