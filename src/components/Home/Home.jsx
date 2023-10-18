import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import Resources from "../Resources/Resources"
import SectionDivider from "../SectionDivider/SectionDivider"
import Top from "../Top/Top"
import { PropTypes } from 'prop-types'

const Home = (props) => {

  const language = props.language

  return (
    <>
      <Top language={language} />
      <SectionDivider language={language} section={'resources'} />
      <Resources language={language} />
      <SectionDivider language={language} section={'about'} />
      <About language={language} />
      <Contact language={language} />
      <Footer language={language} />

    </>
  )
}

Home.propTypes = {
  language: PropTypes.string
}

export default Home
