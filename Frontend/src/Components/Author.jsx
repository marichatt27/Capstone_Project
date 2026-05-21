import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../store/authStore";

import { pageWrapper, navLinkClass, divider } from "../styles/common";

function Author() {
  const currentUser = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  //call t6his function on logout
  const onLogout = async () => {
    //call login route
    await logout();
    //navigate to login component
    navigate("/Login");
  };

  return (
    <div className="min-h-screen bg-[#d9cfc3] px-6 py-10">

      <div className="max-w-7xl mx-auto">

        {/* HERO PROFILE SECTION */}
        <div className="bg-[#f7f3ee] rounded-[45px] p-8 lg:p-12 shadow-xl mb-12">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* LEFT */}
            <div className="flex items-center gap-6">

              {/* PROFILE IMAGE */}
              {currentUser?.profileImageUrl ? (
                <img
                  src={currentUser.profileImageUrl}
                  alt="profile"
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                />
              ) : (
                <div className="w-28 h-28 rounded-full bg-black text-white flex items-center justify-center text-4xl font-bold shadow-lg">
                  {currentUser?.firstName?.charAt(0).toUpperCase()}
                </div>
              )}

              {/* TEXT */}
              <div>

                <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-3">
                  Welcome Back
                </p>

                <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                  {currentUser?.firstName}
                </h1>

                <p className="text-gray-600 text-lg mt-4 max-w-xl">
                  Manage your articles, create new blogs,
                  and share your ideas with the world.
                </p>

              </div>

            </div>

            {/* LOGOUT */}
            <button
              onClick={onLogout}
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition text-lg"
            >
              Logout
            </button>

          </div>

        </div>

        {/* TITLE */}
        <div className="flex items-end justify-between mb-10">

          <div>

            <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-3">
              Dashboard
            </p>

            <h2 className="text-5xl font-black text-gray-900">
              Author Panel
            </h2>

          </div>

        </div>

        {/* NAVIGATION */}
        <div className="flex flex-wrap gap-5 mb-12">

          <NavLink
            to="articles"
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white px-8 py-4 rounded-full shadow-lg text-lg transition"
                : "bg-[#f7f3ee] text-gray-700 px-8 py-4 rounded-full shadow-md hover:bg-black hover:text-white transition text-lg"
            }
          >
            Articles
          </NavLink>

          <NavLink
            to="WriteArticles"
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white px-8 py-4 rounded-full shadow-lg text-lg transition"
                : "bg-[#f7f3ee] text-gray-700 px-8 py-4 rounded-full shadow-md hover:bg-black hover:text-white transition text-lg"
            }
          >
            Write Article
          </NavLink>

        </div>

        {/* CONTENT */}
        <div className="bg-[#f7f3ee] rounded-[40px] p-8 shadow-xl min-h-[500px]">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default Author;