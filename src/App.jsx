
import { RowContainer } from './components/styled-components/Containers'
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
      <RowContainer width='97vw' height='88vh' margin='4rem 2rem 1rem 1rem'>
        <AppRoutes language={language}/>
      </RowContainer>

    </>
  )
}

export default App
