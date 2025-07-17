import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";
import { apiClient } from "../utils/api"; // Axios instance

const Login = () => {
  const [state, setState] = useState("Sign Up"); // or "Login"
  const { token, setToken, fetchCart } = useContext(AppContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const { data } = await apiClient.post("/user/register", { 
        name,
        email,
        password,
      });

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data.user._id);
        setToken(data.token);
        fetchCart();
        toast.success("Registered successfully");
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration error");
    }
  };

  const handleLogin = async () => {
    try {
      const { data } = await apiClient.post("/user/login", {
        email,
        password,
      });

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data.user._id);
        setToken(data.token);
        fetchCart();
        toast.success("Logged in successfully");
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login error");
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (state === "Sign Up") {
      await handleRegister();
    } else {
      await handleLogin();
    }
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="min-h-screen bg-gray-100 font-semibold flex items-center justify-center">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </h2>

          <p className="text-center mb-4">
            Please {state === "Sign Up" ? "Sign Up" : "Log in"} to order now
          </p>

          {state === "Sign Up" && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                placeholder="John Doe"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-blue-600 hover:underline cursor-pointer">
              Forgot password?
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded-md text-base hover:bg-blue-700 transition"
          >
            {state === "Sign Up" ? "Create Account" : "Login"}
          </button>

          <p className="text-sm text-center mt-4">
            {state === "Sign Up" ? "Already have an account?" : "Create a new account?"}{" "}
            <span
              onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              {state === "Sign Up" ? "Login here" : "Click here"}
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
