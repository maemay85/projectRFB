
import { RowContainer } from './components/styled-components/Containers'
import Nav from './components/Nav/Nav'
import AppRoutes from './AppRoutes'

function App() {


  return (
    <>
      <nav>
        <Nav />
      </nav>
      <RowContainer width='97vw' height='88vh' margin='4rem 2rem 1rem 1rem'>
        <AppRoutes />
      </RowContainer>

    </>
  )
}

export default App
