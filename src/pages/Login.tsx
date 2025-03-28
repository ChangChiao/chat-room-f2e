import React, { useEffect } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { authApi } from "../services/api";

interface FormInputs {
  email: string;
  userName?: string;
  password: string;
  confirmPassword?: string;
}

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  // const loginByGoogle = () => {
  //   console.log("loginByGoogle");
  //   userApi.loginByGoogle();
  // };

  useEffect(() => {
    authApi.getAuthInfo().then((res) => {
      console.log(res);
    });
  }, []);

  const onSubmit = async (data: FormInputs) => {
    try {
      if (isSignUp) {
        // TODO: 實現註冊 API
        console.log("Sign up data:", data);
      } else {
        // TODO: 實現登入 API
        console.log("Login data:", data);
      }
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
              className={`w-full p-3 mt-1 border rounded-lg ${
                errors.email ? "border-red-500" : "border-borderColorCustom"
              }`}
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
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
                className={`w-full p-3 mt-1 border rounded-lg ${
                  errors.userName
                    ? "border-red-500"
                    : "border-borderColorCustom"
                }`}
                placeholder="Enter your user name"
                {...register("userName", {
                  required: "User name is required",
                  minLength: {
                    value: 3,
                    message: "User name must be at least 3 characters",
                  },
                })}
              />
              {errors.userName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.userName.message}
                </p>
              )}
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
              className={`w-full p-3 mt-1 border rounded-lg ${
                errors.password ? "border-red-500" : "border-borderColorCustom"
              }`}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
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
                className={`w-full p-3 mt-1 border rounded-lg ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-borderColorCustom"
                }`}
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value: string | undefined) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
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
              onClick={() => {
                setIsSignUp(!isSignUp);
                reset();
              }}
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
