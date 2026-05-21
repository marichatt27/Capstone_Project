import {
  pageBackground,
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  mutedText,
  linkClass,
} from "../styles/common";

import { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "../store/authStore";
import { toast } from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { login, currentUser, loading, isAuthenticated, error } = useAuth(
    (state) => state,
  );

  //CLEAN INPUT BEFORE SENDING
  const onUserLogin = (userCredObj) => {
    login({
      email: userCredObj.email.trim().toLowerCase(),
      password: userCredObj.password.trim(),
    });
  };

  const hasToasted = useRef(false);

  useEffect(() => {
    if (isAuthenticated && !hasToasted.current) {
      hasToasted.current = true;

      if (currentUser?.role === "USER") {
        toast.success("Login successful, redirecting to user profile");
        navigate("/UserProfile");
      } else if (currentUser?.role === "AUTHOR") {
        toast.success("Login successful, redirecting to author profile");
        navigate("/Author");
      } else if (currentUser?.role === "ADMIN") {
        toast.success("Login successful, redirecting to admin profile");
        navigate("/AdminProfile");
      }
    }
  }, [currentUser, isAuthenticated, navigate]);

  if (loading) {
    return <p className="loadingclass">Loading...</p>;
  }

  return (
  <div className="min-h-screen w-full bg-[#d9cfc3] flex items-center justify-center px-4 py-10">

    <div className="w-full max-w-2xl bg-[#f7f3ee] rounded-3xl shadow-xl overflow-hidden">

      {/* RIGHT SIDE */}
      <div className="p-8 md:p-12 flex flex-col justify-center">

        {/* TITLE */}
        <div className="mb-10 text-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
            Sign In
          </p>

          <h2 className="text-5xl font-black text-gray-900">
            Hello Again
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Login to continue your blogging journey.
          </p>

        </div>

        {/* ERROR */}
        {error && (
          <p className="bg-red-100 text-red-500 p-4 rounded-2xl mb-6 text-center">
            {typeof error === "string"
              ? error
              : error?.message || "Login failed"}
          </p>
        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onUserLogin)}
          className="max-w-lg mx-auto w-full"
        >

          <div className="space-y-5">

            {/* EMAIL */}
            <div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white border border-gray-300 p-5 rounded-2xl outline-none focus:border-black transition"
                {...register("email", {
                  required: "Email is required",
                  validate: (value) =>
                    value.trim().length > 0 || "Email cannot be empty",
                })}
              />

              {errors.email && (
                <p className="text-red-500 mt-2">
                  {errors.email.message}
                </p>
              )}

            </div>

            {/* PASSWORD */}
            <div>

              <input
                type="password"
                placeholder="Password"
                className="w-full bg-white border border-gray-300 p-5 rounded-2xl outline-none focus:border-black transition"
                {...register("password", {
                  required: "Password is required",
                  validate: (value) =>
                    value.trim().length > 0 || "Password cannot be empty",
                })}
              />

              {errors.password && (
                <p className="text-red-500 mt-2">
                  {errors.password.message}
                </p>
              )}

            </div>

          </div>

          {/* FORGOT PASSWORD */}
          <div className="text-right mt-4">

            <a
              href="/forgot-password"
              className="text-gray-600 hover:text-black transition"
            >
              Forgot password?
            </a>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-8 bg-black text-white py-5 rounded-2xl text-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign In
          </button>

        </form>

        {/* FOOTER */}
        <p className="text-center text-gray-600 mt-8">

          Don’t have an account?{" "}

          <NavLink
            to="/register"
            className="font-semibold text-black hover:underline"
          >
            Create one
          </NavLink>

        </p>

      </div>

    </div>

  </div>
);
}

export default Login;