import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function Register() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username,
      email,
      token: "dummy_token",
    };

    login(newUser);
    console.log("Registered + Logged in!", newUser);
  };

  return (
    <div className="relative min-h-screen">
      <img
        src="/bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative flex items-center justify-center min-h-screen px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-2xl p-8 w-full max-w-md text-white z-10"
        >
          <h1 className="text-3xl font-bold text-center mb-6 drop-shadow-md">Create Account ✨</h1>

          <div className="flex items-center bg-white/10 rounded-lg px-4 py-2 mb-4">
            <FaUser className="text-white mr-3" />
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-transparent outline-none text-white placeholder-white/70"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex items-center bg-white/10 rounded-lg px-4 py-2 mb-4">
            <FaEnvelope className="text-white mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent outline-none text-white placeholder-white/70"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center bg-white/10 rounded-lg px-4 py-2 mb-6">
            <FaLock className="text-white mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none text-white placeholder-white/70"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full bg-white/20 border border-white/30 hover:bg-white/30 transition text-white font-semibold py-2 rounded-lg">
            Register
          </button>

          <p className="mt-6 text-sm text-center text-white/80">
            Already have an account?{" "}
            <Link to="/login" className="text-white font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
