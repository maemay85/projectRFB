import React from 'react'
import { RowContainer, ColumnContainer } from './components/styled-components/Containers'
import Nav from './components/Nav/Nav'
import AppRoutes from './AppRoutes'

function App() {


  return (
    <>
      <nav>
        <Nav />
      </nav>
      <RowContainer>
        <AppRoutes />
      </RowContainer>

    </>
  )
}

export default App
