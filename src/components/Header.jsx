import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white/80 backdrop-blur-md text-gray-800 px-6 py-4 flex justify-between items-center shadow-sm">
      <h2 className="text-xl font-bold">
        <Link to="/dashboard">MindMate</Link>
      </h2>

      <nav className="flex items-center gap-6">
        <Link
          to="/dashboard"
          className="hover:underline text-gray-700 font-medium"
        >
          Dashboard
        </Link>
        <Link
          to="/insights"
          className="hover:underline text-gray-700 font-medium"
        >
          Insights
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <span className="text-gray-700">Hi, {user?.username || "User"}</span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
