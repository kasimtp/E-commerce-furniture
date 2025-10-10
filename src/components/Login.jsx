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
        toast.success("Registered successfully 🎉");
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration error");
    }
  };

  const handleLogin = async () => {
    try {
      const { data } = await apiClient.post("/user/login", { email, password });
      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data.user._id);
        setToken(data.token);
        fetchCart();
        toast.success("Logged in successfully 🎉");
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-600 py-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {state === "Sign Up" ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-blue-100 text-sm md:text-base mt-1">
            {state === "Sign Up"
              ? "Join us and start shopping today!"
              : "Log in to continue your shopping experience"}
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={onSubmitHandler} className="p-8 space-y-5">
          {state === "Sign Up" && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
                required
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-600 hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-base font-semibold shadow-md transition duration-300"
          >
            {state === "Sign Up" ? "Create Account" : "Login"}
          </button>

          <p className="text-center text-sm text-gray-600">
            {state === "Sign Up"
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <span
              onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
              className="text-blue-600 font-medium hover:underline cursor-pointer"
            >
              {state === "Sign Up" ? "Login here" : "Sign up here"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
