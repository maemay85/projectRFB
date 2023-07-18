
import { ColumnContainer } from '../styled-components/Containers'
import { PropTypes } from 'prop-types'

function About(props) {
const language = props.language

  return (
    <>
      <ColumnContainer margin='10rem 0 0 0' padding='0 10rem' position='absolute'>
            {language==='english' ?
            <div>
              <h1>About Reuben</h1>

              <p>Hi I'm Reuben!</p>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eligendi, distinctio possimus ullam aliquid beatae, veniam esse maxime perspiciatis voluptates sapiente quod sed ipsam ut impedit! Tempore, ullam. Molestias, dolor?</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem recusandae quasi eaque illum provident animi ea esse itaque, ducimus repellendus. Nobis dignissimos fugiat officia possimus similique eius ex laboriosam! </p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam sed eos distinctio, necessitatibus nulla quos libero minima quasi ex amet repudiandae? Similique quasi non blanditiis modi in quia dolor? </p>
            </div>
            :
            <div>
            <h1>Acerca de Reuben</h1>

              <p>¡Hola soy Reuben!</p>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eligendi, distinctio possimus ullam aliquid beatae, veniam esse maxime perspiciatis voluptates sapiente quod sed ipsam ut impedit! Tempore, ullam. Molestias, dolor?</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem recusandae quasi eaque illum provident animi ea esse itaque, ducimus repellendus. Nobis dignissimos fugiat officia possimus similique eius ex laboriosam! </p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam sed eos distinctio, necessitatibus nulla quos libero minima quasi ex amet repudiandae? Similique quasi non blanditiis modi in quia dolor? </p>
            </div>}
        </ColumnContainer>
    </>
  )
}

About.propTypes = {
  language: PropTypes.string
}

export default About
