import About from "../About/About"
import Contact from "../Contact/Contact"
import Resources from "../Resources/Resources"
import { PropTypes } from 'prop-types'

const Home = (props) => {

  const language = props.language

  return (
    <>
      <Resources language={language} />
      <About language={language} />
      <Contact language={language} />
    </>
  )
}

Home.propTypes = {
  language: PropTypes.string
}

export default Home
