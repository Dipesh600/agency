import { LandingPage } from "./page/LandingPg"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentServices from './components/student-services'; 
function App() {

  return (
    <Router>
    <Routes>
      <Route path="/student-services" element={<StudentServices />} />
      <Route path="/" element={<LandingPage />} />

    </Routes>
  </Router>
  )
}

export default App

