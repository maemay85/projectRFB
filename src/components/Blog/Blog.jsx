
import { ColumnContainer } from '../styled-components/Containers'
import { PropTypes } from 'prop-types'

function Blog(props) {
const language = props.language

  return (
    <>
      <ColumnContainer margin='10rem 0 0 0' padding='0 10rem' position='absolute'>

            {language==='english' ?
              <div id="blog-content-english">
                <h1>Blog</h1>
                <h2>COMING SOON!</h2>
              </div> :
              <div id="blog-content-español">
                <h1>Blog</h1>
                <h2>¡Muy Pronto!</h2>
              </div>}


        </ColumnContainer>
    </>
  )
}

Blog.propTypes = {
  language: PropTypes.string
}

export default Blog
