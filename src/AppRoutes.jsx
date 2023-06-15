import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import EmailContactForm from "./components/EmailContactForm"

const AppRoutes = () => {
  return (
    <div id='router'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/email' element={<EmailContactForm />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
