import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            EMON Blog
          </h3>
          <p className="text-sm leading-relaxed">
            A personal tech & lifestyle blog where I share tutorials,
            experiences, and useful resources for developers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Categories
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>React & Tailwind</li>
            <li>Linux Tips</li>
            <li>Freelancing</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Newsletter
          </h4>
          <p className="text-sm mb-3">
            Subscribe to get latest blog updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md text-black text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-600 px-4 py-2 rounded-r-md text-white text-sm hover:bg-indigo-700"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        {new Date().getFullYear()} EMON Blog. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
