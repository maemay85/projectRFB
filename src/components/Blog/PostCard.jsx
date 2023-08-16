
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom';


const PostCard = (props) => {
  const text = props.text;
  const title = props.title;
  const date = props.date;
  const categories = props.categories;
  const imageUrl = props.imageUrl;
  return (
    <>

        <div className="post-container">

          <div className="post-image-container">
            <img src={imageUrl} />
            <div className='post-categories-wrapper'>{categories.map((category)=>{
              return(
                <div key={category}>{category}</div>
                )
              })
            }
            </div>
          </div>
          <div className='post-content-container'>
          <div className='post-date'>
            {date}
          </div>
          <div className='post-title'>
            {title}
          </div>
          <div className='post-text-wrapper'>
          <div className="post-text">{text}</div>
          <Link to={`post${title}`}>
            ... READ MORE ⟶
          </Link>
          </div>

          </div>
        </div>

    </>
  )
}

PostCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  categories: PropTypes.array,
  imageUrl: PropTypes.string
}

export default PostCard
