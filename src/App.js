import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Github from './pages/Github'
import Portfolio from './pages/Portfolio'

import styled from 'styled-components'

const Container = styled.div`
    padding: 0.5rem;
    margin-left: 3.5rem;
    margin: auto;
    width: 85vw;
`

function App() {
    return (
        <>
            <BrowserRouter>
                <Sidebar />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/portfolio' element={<Portfolio />} />
                        <Route path='/github' element={<Github />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </>
    )
}

export default App
