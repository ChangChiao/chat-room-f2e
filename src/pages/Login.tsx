import React, { useState } from "react";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F8FF]">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#2E6C5D]">
            {isSignUp ? "Sign Up" : "Hello! Welcome to plantland"}
          </h1>
        </div>
        <form>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#4B6F5D]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#4B6F5D]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password (only in sign-up) */}
          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-[#4B6F5D]"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
                placeholder="Confirm your password"
              />
            </div>
          )}

          {/* Phone (only in sign-up) */}
          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#4B6F5D]"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
                placeholder="Enter your phone number"
              />
            </div>
          )}

          {/* Forgot password link */}
          {!isSignUp && (
            <div className="text-sm text-right mb-4">
              <a href="#" className="text-[#2E6C5D] hover:text-[#4B6F5D]">
                Forgot Password?
              </a>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full p-3 bg-[#2E6C5D] text-white rounded-lg hover:bg-[#4B6F5D]"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>

          {/* Social login buttons */}
          {!isSignUp && (
            <div className="mt-6 flex justify-center space-x-4">
              <button className="w-full p-3 border border-gray-300 rounded-lg text-center">
                <i className="fab fa-facebook"></i> Login with Facebook
              </button>
              <button className="w-full p-3 border border-gray-300 rounded-lg text-center">
                <i className="fab fa-google"></i> Login with Google
              </button>
              <button className="w-full p-3 border border-gray-300 rounded-lg text-center">
                <i className="fab fa-apple"></i> Login with Apple
              </button>
            </div>
          )}

          {/* Switch between Login and SignUp */}
          <div className="mt-6 text-center">
            <span className="text-sm text-[#4B6F5D]">
              {isSignUp
                ? "Already have an account? "
                : "Don't have an account? "}
              <button
                type="button"
                className="text-[#2E6C5D] font-semibold"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Login" : "Sign Up"}
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
