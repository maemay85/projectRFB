import { Route, Routes } from "react-router-dom"
import About from "./components/About/About"
import Resources from "./components/Resources/Resources"
import Contact from "./components/Contact/Contact"
import EmailContactForm from "./components/Contact/EmailContactForm"
import Blog from "./components/Blog/Blog"
import { PropTypes } from 'prop-types'
import Disclaimer from "./components/Disclaimer"
import PrivacyAndAccessibility from "./components/PrivacyAndAccessibility"
import Home from "./components/Home/Home"

const AppRoutes = (props) => {
  const language = props.language;
  return (
    <div id='router'>
      <Routes>
        <Route path='/' element={<Home language={language}/>} />
        <Route path='/about' element={<About language={language}/>} />
        <Route path='/resources' element={<Resources language={language}/>} />
        <Route path='/contact' element={<Contact language={language}/>} />
        <Route path='/blog' element={<Blog language={language}/>} />
        <Route path='/email' element={<EmailContactForm language={language}/>} />
        <Route path='/disclaimer' element={<Disclaimer language={language}/>} />
        <Route path='/privacy-and-accessibility' element={<PrivacyAndAccessibility language={language}/>} />
        <Route path='*' element={<About language={language}/>} />
      </Routes>
    </div>
  )
}

AppRoutes.propTypes = {
  language: PropTypes.string
}

export default AppRoutes
