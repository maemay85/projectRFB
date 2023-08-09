
import { PropTypes } from 'prop-types'


const ResourceCard = (props) => {
  const text = props.text;
  const url = props.url;
  const tagline = props.tagline;
  const imageUrl = props.imageUrl
  return (
    <>
      <a href={url} target='_blank' rel='noreferrer'>
        <div className="resource-container">
          <h1>{text}</h1>
          <div className="image-container">
            <img src={imageUrl} />
          </div>
          <p>{tagline}</p>

        </div>
      </a>
    </>
  )
}

ResourceCard.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  tagline: PropTypes.string,
  imageUrl: PropTypes.string
}

export default ResourceCard
