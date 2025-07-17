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
   <header className="bg-white/70 backdrop-blur-md text-gray-900 px-8 py-4 shadow-sm w-full">
  <div className="flex justify-between items-center max-w-7xl mx-auto">
    
    <div className="flex items-center gap-10">
      <h2 className="text-2xl font-bold">
        <Link to="/dashboard" className="hover:underline">MindMate</Link>
      </h2>

      <nav className="flex gap-6 text-lg">
        <Link to="/dashboard" className="hover:underline text-gray-800 font-medium">
          Dashboard
        </Link>
        <Link to="/insights" className="hover:underline text-gray-800 font-medium">
          Insights
        </Link>
        <Link to="/mood-graph" className="hover:underline text-gray-800 font-medium">
          Mood Graph
        </Link>
      </nav>
    </div>
    <div className="flex items-center gap-6">
      <span className="text-gray-800 text-base">Hi, {user?.username || "User"}</span>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold"
      >
        Logout
      </button>
    </div>
  </div>
</header>

  );
}

export default Header;
