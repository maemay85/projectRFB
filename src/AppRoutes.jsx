import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"

const AppRoutes = () => {
  return (
    <div id='router'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
