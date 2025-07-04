import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white/10 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-bold">
        MentalHealthTracker
      </h2>
      <div className="flex items-center gap-4">
        <span className="text-white/80">Hello, {user?.username || "User"}</span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-semibold"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
