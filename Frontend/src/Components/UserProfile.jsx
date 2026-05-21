import { useAuth } from "../store/authStore";
import { useNavigate } from "react-router";

import axios from "axios";
import { useEffect, useState } from "react";

import {
  articleGrid,
  articleCardClass,
  articleTitle,
  ghostBtn,
  loadingClass,
  errorClass,
  timestampClass,
} from "../styles/common.js";
axios.defaults.withCredentials = true;
function UserProfile() {
  const logout = useAuth((state) => state.logout);
  const currentUser = useAuth((state) => state.currentUser);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        //read articles of all authors
        let res = await axios.get(
          "https://capstone-project-zd1a.onrender.com/user-api/articles",
          { withCredentials: true },
        );
        //update articles state
        if (res.status === 200) {
          setArticles((await res).data.payload);
        }
      } catch (err) {
        setError(err.response?.data?.error || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  // convert UTC → IST
  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const onLogout = async () => {
    await logout();

    navigate("/login");
  };

  const navigateToArticleByID = (articleObj) => {
    navigate(`/article/${articleObj._id}`, {
      state: articleObj,
    });
  };

  if (loading) {
    return <p className={loadingClass}>Loading articles...</p>;
  }

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
                Explore trending blogs, discover inspiring stories,
                and enjoy modern digital storytelling.
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
            Explore
          </p>

          <h2 className="text-5xl font-black text-gray-900">
            Latest Articles
          </h2>

        </div>

      </div>

      {/* ERROR */}
      {error && (
        <div className="bg-red-100 text-red-500 p-5 rounded-2xl mb-8">
          {error}
        </div>
      )}

      {/* EMPTY STATE */}
      {articles.length === 0 ? (

        <div className="bg-[#f7f3ee] rounded-[35px] p-20 text-center shadow-sm">

          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            No Articles Yet
          </h3>

          <p className="text-gray-600 text-lg">
            Published blogs will appear here.
          </p>

        </div>

      ) : (

        /* BLOG GRID */
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">

          {articles.map((articleObj) => (

            <div
              key={articleObj._id}
              className="w-full max-w-[400px] bg-[#f7f3ee] rounded-[38px] overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-2xl transition duration-500"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={
                    articleObj.articleImage ||
                    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop"
                  }
                  alt="article"
                  className="w-full h-[260px] object-cover hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/10"></div>

              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col min-h-[320px]">

                <div>

                  <p className="uppercase tracking-[4px] text-xs text-gray-500 mb-5">
                    Blog Article
                  </p>

                  <h2 className="text-4xl font-black text-gray-900 leading-tight">
                    {articleObj.title}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mt-6">
                    {articleObj.content.slice(0, 120)}...
                  </p>

                </div>

                {/* FOOTER */}
                <div className="mt-auto pt-8 flex items-center justify-between">

                  <p className="text-gray-500 text-sm">
                    {formatDateIST(articleObj.createdAt)}
                  </p>

                  <button
                    onClick={() => navigateToArticleByID(articleObj)}
                    className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
                  >
                    Read
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  </div>
);
}

export default UserProfile;