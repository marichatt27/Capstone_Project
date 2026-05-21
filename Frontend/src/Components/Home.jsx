import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-[#d9cfc3] px-6 py-6 overflow-hidden">

      <div className="max-w-7xl mx-auto h-[95vh] grid lg:grid-cols-[1.2fr_1fr] gap-6">

        {/* LEFT SIDE */}
        <div className="bg-white rounded-[40px] p-10 flex flex-col justify-between shadow-sm">

          {/* TOP CONTENT */}
          <div>

            <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-6">
              Modern Blogging Platform
            </p>

            <h1 className="text-6xl lg:text-7xl font-black leading-[0.95] text-gray-900">
              Read.
              <br />
              Write.
              <br />
              Inspire.
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mt-8 max-w-xl">
              Explore thoughtful articles on technology, lifestyle,
              creativity, productivity, and modern digital culture —
              all in one beautifully curated space.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">

              <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition">
                Explore Articles
              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-full hover:bg-gray-100 transition">
                Start Writing
              </button>

            </div>

          </div>

          {/* FEATURED ARTICLE */}
          <div className="bg-[#f5f1eb] rounded-[30px] p-7 flex items-center gap-5">

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
              alt="featured"
              className="w-32 h-32 rounded-[25px] object-cover"
            />

            <div>

              <p className="uppercase text-xs tracking-[3px] text-gray-500 mb-3">
                Featured Article
              </p>

              <h3 className="text-2xl font-bold leading-snug text-gray-900">
                The Future Of Creative Web Design
              </h3>

              <p className="text-gray-600 mt-3">
                6 min read
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE COLLAGE */}
        <div className="grid grid-cols-2 gap-6">

          {/* LARGE IMAGE */}
          <div className="col-span-2 relative overflow-hidden rounded-[35px]">

            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop"
              alt="hero"
              className="w-full h-[320px] object-cover hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="absolute bottom-0 p-7 text-white">

              <p className="uppercase tracking-[3px] text-xs mb-2">
                Writing & Creativity
              </p>

              <h2 className="text-4xl font-bold leading-tight">
                Modern Digital Storytelling
              </h2>

            </div>

          </div>

          {/* ARTICLE CARD */}
          <div className="bg-[#e7ddd4] rounded-[30px] p-7 flex flex-col justify-between">

            <div>

              <p className="uppercase text-xs tracking-[3px] text-gray-600 mb-4">
                Productivity
              </p>

              <h3 className="text-3xl font-bold leading-snug">
                Building Better Creative Habits
              </h3>

            </div>

            <button className="mt-8 text-gray-700 hover:translate-x-1 transition">
              Read Article →
            </button>

          </div>

          {/* IMAGE CARD */}
          <div className="relative overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
              alt="fashion"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />

          </div>

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="community"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />

          </div>

          {/* SMALL CARD */}
          <div className="bg-white rounded-[30px] p-7 flex flex-col justify-between shadow-sm">

            <div>

              <p className="uppercase text-xs tracking-[3px] text-gray-500 mb-4">
                Technology
              </p>

              <h3 className="text-3xl font-bold leading-snug">
                Frontend Trends In 2026
              </h3>

            </div>

            <button className="mt-8 text-gray-700 hover:translate-x-1 transition">
              Read Article →
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;