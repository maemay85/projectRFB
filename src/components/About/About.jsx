import { PropTypes } from 'prop-types'
import Contact from '../Contact/Contact'

function About(props) {
const language = props.language

  return (
    <>
      <div id="about-page-container">

          <div id="about-page-background-image">
            <img src="src/assets/unseen-histories-GBwEIHq1Imw-unsplash_duotone 2.png" />
          </div>
          <div id="about-page-content-container">
            <div id="about-page-headshot-image">
            <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/headshot.png" />
          </div>
          <div id="about-page-text-wrapper">
            {language==='english' ?
            <>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eligendi, distinctio possimus ullam aliquid beatae, veniam esse maxime perspiciatis voluptates sapiente quod sed ipsam ut impedit! Tempore, ullam. Molestias, dolor?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem recusandae quasi eaque illum provident animi ea esse itaque, ducimus repellendus. Nobis dignissimos fugiat officia possimus similique eius ex laboriosam! </p>
              </>
              :
              <>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem recusandae quasi eaque illum provident animi ea esse itaque, ducimus repellendus. Nobis dignissimos fugiat officia possimus similique eius ex laboriosam! </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam sed eos distinctio, necessitatibus nulla quos libero minima quasi ex amet repudiandae? Similique quasi non blanditiis modi in quia dolor? </p>
              </>}
            </div>
        </div>

      </div>
    <Contact language={language} />
    </>
  )
}

About.propTypes = {
  language: PropTypes.string
}

export default About
