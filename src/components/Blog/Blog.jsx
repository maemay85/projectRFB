import { PropTypes } from 'prop-types'

function Blog(props) {
const language = props.language

  return (
    <>
      <div id="blog-page-container" className='column'>

            {language==='english' ?
              <div id="blog-content-english">
                <h1>Blog</h1>
                <h2>COMING SOON!</h2>
              </div> :
              <div id="blog-content-español">
                <h1>Blog</h1>
                <h2>¡Muy Pronto!</h2>
              </div>}


        </div>
    </>
  )
}

Blog.propTypes = {
  language: PropTypes.string
}

export default Blog
