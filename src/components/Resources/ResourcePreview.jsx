
import { PropTypes } from 'prop-types'



const ResourcePreview = (props) => {
  const text = props.text;
  const title = props.title;
  const url = props.url;
  const imageUrl = props.imageUrl;
  const oddEven = props.oddEven;

  return (

    <div className='resource-preview-container'>
      <div className={`resource-preview-image ${oddEven}`}>
          <img src={`${imageUrl}`} />
      </div>

      <div className='resource-preview-body'>
        <div className='resource-preview-title title'>{title}</div>
        <div className='resource-preview-text'>{text}...</div>
        <a href={`${url}`} target="_blank" rel="noopener noreferrer" className='read-more'>
          <div>READ MORE</div>
          <img src='https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/readmorearrow.svg' />
        </a>
      </div>
    </div>
  )
}

ResourcePreview.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  imageUrl: PropTypes.string,
  oddEven: PropTypes.string
}

export default ResourcePreview
