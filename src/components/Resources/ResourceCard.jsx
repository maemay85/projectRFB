
import { PropTypes } from 'prop-types'



const ResourceCard = (props) => {
  const text = props.text;
  const title = props.title;
  const imageUrl = props.imageUrl;
  return (

    <div className="resource-card-container">
      <div className='resource-card-image'>
        <img src={`${imageUrl}`} />
      </div>
      <div className='resource-card-title'>{title}</div>
      <div className='resource-card-text'>{text}</div>
      ... READ MORE
    </div>
  )
}

ResourceCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string
}

export default ResourceCard
