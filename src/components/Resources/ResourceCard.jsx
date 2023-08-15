
import { PropTypes } from 'prop-types'


const ResourceCard = (props) => {
  const text = props.text;
  const url = props.url;
  const category = props.category;
  const imageUrl = props.imageUrl;
  return (
    <>
      <a href={url} target='_blank' rel='noreferrer'>
        <div className="resource-container">

          <div className="image-container">
            <img src={imageUrl} />
          </div>
          <div className='subtitle'>{category}</div>
          <div className='title'>{text}</div>
        </div>
      </a>
    </>
  )
}

ResourceCard.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  category: PropTypes.string,
  imageUrl: PropTypes.string
}

export default ResourceCard
