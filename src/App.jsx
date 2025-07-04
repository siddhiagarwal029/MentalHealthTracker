import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Optional: Redirect to login as default */}
      <Route path="*" element={<Login />} />
    </Routes>
  )
}

export default App
