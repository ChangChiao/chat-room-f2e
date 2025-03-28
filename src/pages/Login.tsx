import React, { useEffect, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authApi } from "../services/api";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  // const loginByGoogle = () => {
  //   console.log("loginByGoogle");
  //   userApi.loginByGoogle();
  // };

  useEffect(() => {
    authApi.getAuthInfo().then((res) => {
      console.log(res);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handleSubmit");
  };

  // @ts-expect-error workaround from official docs
  const googleIcon: IconProp = "fa-brands fa-google";

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary-500">
            {isSignUp ? "Sign Up" : "Hello! Welcome to plantland"}
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-primary-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-1 border border-borderColorCustom rounded-lg"
              placeholder="Enter your email"
            />
          </div>

          {/* User Name (only in sign-up) */}
          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-primary-600"
              >
                User Name
              </label>
              <input
                type="text"
                id="userName"
                className="w-full p-3 mt-1 border border-borderColorCustom rounded-lg"
                placeholder="Enter your user name"
              />
            </div>
          )}

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-primary-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-1 border border-borderColorCustom rounded-lg"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password (only in sign-up) */}
          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-primary-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full p-3 mt-1 border border-borderColorCustom rounded-lg"
                placeholder="Confirm your password"
              />
            </div>
          )}

          {/* Forgot password link */}
          {!isSignUp && (
            <div className="text-sm text-right mb-4">
              <a href="#" className="text-primary-500 hover:text-primary-600">
                Forgot Password?
              </a>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full p-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Social login buttons */}
        {!isSignUp && (
          <div className="mt-6 flex justify-center space-x-4">
            <button className="w-full p-3 border border-borderColorCustom rounded-lg text-center">
              <i className="fab fa-facebook"></i> Login with Facebook
            </button>
            <a href={`${import.meta.env.VITE_API_BASE_URL}/auth/google`}>
              <button className="w-full p-3 border border-borderColorCustom rounded-lg text-center">
                <FontAwesomeIcon icon={googleIcon} />
                Login with Google
              </button>
            </a>
          </div>
        )}

        {/* Switch between Login and SignUp */}
        <div className="mt-6 text-center">
          <span className="text-sm text-primary-600">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <button
              type="button"
              className="text-primary-500 font-semibold"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Login" : "Sign Up"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
