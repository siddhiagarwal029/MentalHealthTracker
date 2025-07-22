import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Insights from "./pages/Insights";
import ProtectedRoute from "./components/ProtectedRoute";
import MoodGraph from "./pages/MoodGraph";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/insights"
        element={
          <ProtectedRoute>
            <Insights />
          </ProtectedRoute>
        }
      />
      <Route
  path="/mood-graph"
  element={
    <ProtectedRoute>
      <MoodGraph />
    </ProtectedRoute>
  }
/>
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
