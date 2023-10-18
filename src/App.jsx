
import Nav from './components/Nav/Nav'
import AppRoutes from './AppRoutes'
import { useState } from 'react';

function App() {

  const [language, setLanguage] = useState("english");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.innerText.toLowerCase())
  }

  return (
    <>
      <nav>
        <Nav handleLanguageChange={handleLanguageChange} language={language}/>
      </nav>
      <div id="app-container">
        <AppRoutes language={language}/>

      </div>

    </>
  )
}

export default App
