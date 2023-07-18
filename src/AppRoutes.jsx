import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import TenantResources from "./components/TenantResources"
import Contact from "./components/Contact"
import EmailContactForm from "./components/EmailContactForm"
import Blog from "./components/Blog/Blog"
import { PropTypes } from 'prop-types'

const AppRoutes = (props) => {
  const language = props.language;
  return (
    <div id='router'>
      <Routes>
        <Route path='/' element={<Home language={language}/>} />
        <Route path='/about' element={<About language={language}/>} />
        <Route path='/tenantresources' element={<TenantResources language={language}/>} />
        <Route path='/contact' element={<Contact language={language}/>} />
        <Route path='/blog' element={<Blog language={language}/>} />
        <Route path='/email' element={<EmailContactForm language={language}/>} />
        <Route path='*' element={<Home language={language}/>} />
      </Routes>
    </div>
  )
}

AppRoutes.propTypes = {
  language: PropTypes.string
}

export default AppRoutes
