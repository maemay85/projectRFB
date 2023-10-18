
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom';


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
    </div>
  )
}

ResourceCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string
}

export default ResourceCard
