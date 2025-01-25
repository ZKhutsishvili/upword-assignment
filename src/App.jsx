import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateResearchPage from './pages/create-research'
import ResearchPage from './pages/research'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateResearchPage />} />
        <Route path="/research" element={<ResearchPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
