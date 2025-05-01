import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [name, setName] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>

        <form className="space-y-5">
          <div>
            <p>Please {state === 'Sign Up' ? 'Sign Up' : 'Log in'} to order now</p>

            {state === 'Sign Up' && (
              <div className="w-full">
                <p>Full Name</p>
                <input
                  className="border border-zinc-300 rounded w-full p-2 mt-3"
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm text-blue-600 hover:underline cursor-pointer">
              Forgot password?
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded-md text-base hover:bg-blue-700 transition"
          >
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </button>

          {state === 'Sign Up' ? (
            <p className="text-sm text-center">
              Already have an account?{' '}
              <span
                onClick={() => setState('Login')}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-center">
              Create a new account?{' '}
              <span
                onClick={() => setState('Sign Up')}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Click here
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
