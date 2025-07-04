import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="relative min-h-screen">
      <img
        src="/bg.jpg"
        alt="Calm background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative flex items-center justify-center min-h-screen px-4">
        <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-2xl p-8 w-full max-w-md text-white z-10">
          <h1 className="text-3xl font-bold text-center mb-6 drop-shadow-md">
            Welcome Back
          </h1>

          <div className="flex items-center bg-white/10 rounded-lg px-4 py-2 mb-4 focus-within:ring-2 focus-within:ring-indigo-400">
            <FaEnvelope className="text-white mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent outline-none text-white placeholder-white/70"
            />
          </div>

          <div className="flex items-center bg-white/10 rounded-lg px-4 py-2 mb-6 focus-within:ring-2 focus-within:ring-indigo-400">
            <FaLock className="text-white mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none text-white placeholder-white/70"
            />
          </div>

          <button className="w-full bg-white/20 border border-white/30 hover:bg-white/30 transition text-white font-semibold py-2 rounded-lg">
            Log In
          </button>

          <p className="mt-6 text-sm text-center text-white/80">
            Don’t have an account?{" "}
            <Link to="/register" className="text-white font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
