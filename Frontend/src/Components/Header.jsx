import React from 'react';
import { NavLink, useNavigate } from 'react-router';
import { useAuth } from '../store/authStore';

function Header() {
  const { isAuthenticated, logout } = useAuth((state) => state);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault(); 
    await logout();
    navigate("/login");
  };

  return (
  <header className="sticky top-0 z-50 px-6 py-5 bg-[#f7f4ef]/90 backdrop-blur-md">

    <div className="max-w-7xl mx-auto bg-white/80 border border-[#ece7df] rounded-[28px] px-8 py-5 flex items-center justify-between shadow-sm">

      {/* LOGO */}
      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white text-xl font-bold">
          B
        </div>

        <div>

          <h1 className="text-2xl font-black tracking-tight text-gray-900">
            BlogSphere
          </h1>

          <p className="text-sm text-gray-500">
            Stories & inspiration
          </p>

        </div>

      </div>

      {/* NAVIGATION */}
      <ul className="flex items-center gap-4 md:gap-8 text-[15px] font-medium">

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition duration-300 hover:text-black
              ${
                isActive
                  ? "text-black"
                  : "text-gray-500"
              }`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Register"
            className={({ isActive }) =>
              `transition duration-300 hover:text-black
              ${
                isActive
                  ? "text-black"
                  : "text-gray-500"
              }`
            }
          >
            Register
          </NavLink>
        </li>

        {isAuthenticated ? (
          <li>
            <NavLink
              to="/Login"
              onClick={handleLogout}
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Logout
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              to="/Login"
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Login
            </NavLink>
          </li>
        )}

      </ul>

    </div>

  </header>
);
}

export default Header;