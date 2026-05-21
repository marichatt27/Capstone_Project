import {
  divider,
  errorClass,
  formCard,
  formGroup,
  formTitle,
  inputClass,
  labelClass,
  pageBackground,
  submitBtn,
  mutedText,
} from "../styles/common";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Register() {
  let navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  //When user registration submitted
  const onUserRegister = async (userObj) => {
    try {
      //start loading
      setLoading(true)
      console.log(userObj)
      //make http request to create user
      let res = await axios.post(
        "https://capstone-project-zd1a.onrender.com/common-api/users",
        userObj
      );
      
      if(res.status==201)
        //navigate to  login
      navigate("/Login")
      }
    catch (err) {
      console.log("err in registration", err);
      setApiError(err.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
    
  };
  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (apiError) {
    return <p className="text-red-500 text-center text-3xl">{errors.message}</p>;
  }

  return (
  <div className="min-h-screen bg-[#d9cfc3] flex items-center justify-center px-4 py-10">

    <div className="w-full max-w-2xl bg-[#f7f3ee] rounded-3xl shadow-xl overflow-hidden">

      {/* RIGHT SIDE */}
      <div className="p-8 md:p-10 flex flex-col justify-center">

        {/* TITLE */}
        <div className="mb-8 text-center">

          <p className="uppercase tracking-[3px] text-sm text-gray-500 mb-3">
            Create Account
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Welcome
          </h2>

          <p className="text-gray-600 mt-3">
            Create your account to continue.
          </p>

        </div>

        {/* ERROR */}
        {apiError && (
          <p className="bg-red-100 text-red-500 p-3 rounded-xl mb-5 text-center">
            {apiError}
          </p>
        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onUserRegister)}
          className="max-w-lg mx-auto w-full"
        >

          {/* ROLE */}
          <div className="mb-5">

            <p className="text-gray-700 font-medium mb-3">
              Register as
            </p>

            <div className="flex gap-4">

              <label className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-3 flex items-center justify-center gap-2 cursor-pointer">

                <input
                  type="radio"
                  value="USER"
                  {...register("role", {
                    required: "Please select a role",
                  })}
                />

                <span>User</span>

              </label>

              <label className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-3 flex items-center justify-center gap-2 cursor-pointer">

                <input
                  type="radio"
                  value="AUTHOR"
                  {...register("role", {
                    required: "Please select a role",
                  })}
                />

                <span>Author</span>

              </label>

            </div>

            {errors.role && (
              <p className="text-red-500 mt-2 text-sm">
                {errors.role.message}
              </p>
            )}

          </div>

          {/* INPUTS */}
          <div className="space-y-4">

            {/* NAME ROW */}
            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-white border border-gray-300 p-4 rounded-xl outline-none focus:border-black"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-white border border-gray-300 p-4 rounded-xl outline-none focus:border-black"
                {...register("lastName")}
              />

            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white border border-gray-300 p-4 rounded-xl outline-none focus:border-black"
              {...register("email", {
                required: "Email is required",
              })}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white border border-gray-300 p-4 rounded-xl outline-none focus:border-black"
              {...register("password", {
                required: "Password is required",
              })}
            />

            <input
              type="text"
              placeholder="Profile Image URL"
              className="w-full bg-white border border-gray-300 p-4 rounded-xl outline-none focus:border-black"
              {...register("profileImageUrl")}
            />

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-6 bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Create Account
          </button>

        </form>

        {/* FOOTER */}
        <p className="text-center text-gray-600 mt-6">

          Already have an account?{" "}

          <NavLink
            to="/Login"
            className="font-semibold text-black hover:underline"
          >
            Sign In
          </NavLink>

        </p>

      </div>

    </div>

  </div>
);
}

export default Register;