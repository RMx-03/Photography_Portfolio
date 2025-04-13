import { FaInstagram, FaTelegram, FaPinterest } from 'react-icons/fa'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div id="contact" className="section-container min-h-screen py-20 bg-black">
      {/* Desktop Version */}
      <div className="hidden md:block max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-24">
          
          {/* Left Side - Form */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl text-white font-bold">HAVE ANY QUESTIONS?</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 bg-transparent border-b border-white/30 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="flex-1 bg-transparent border-b border-white/30 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-white text-black px-12 py-3 hover:bg-gray-200 transition-colors font-medium w-fit"
              >
                Send
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col items-end">
            <div className="mt-12">
              <h2 className="text-2xl text-white text-right font-bold">KEEP IN TOUCH</h2>
              <div className="mt-8 space-y-3 text-gray-300 text-right">
                <p>sofiya.dembicka@gmail.com</p>
                <p>+38 (050) 713 71 23</p>
                <p>+38 (068) 604 18 26</p>
              </div>
            </div>
            <div className="flex gap-6 mt-32">            
              <a href="#" className="text-white hover:scale-110 transition-transform">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:scale-110 transition-transform">
                <FaTelegram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:scale-110 transition-transform">
                <FaPinterest className="w-6 h-6" />
              </a>              
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden px-4 text-white">
        <h2 className="text-2xl font-bold mb-6">HAVE ANY QUESTIONS?</h2>
        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-transparent border-b border-white/30 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full bg-transparent border-b border-white/30 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full bg-transparent border-b border-white/30 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-white text-black py-3 font-medium"
          >
            Send
          </button>
        </form>

        <h2 className="text-2xl font-bold mb-4">KEEP IN TOUCH</h2>
        <div className="space-y-2 text-sm opacity-80 mb-6">
          <p>sofiya.dembicka@gmail.com</p>
          <p>+38 (050) 713 71 23</p>
          <p>+38 (068) 604 18 26</p>
        </div>

        <div className="flex justify-center gap-6">
          <a href="#" className="text-white">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-white">
            <FaTelegram className="w-6 h-6" />
          </a>
          <a href="#" className="text-white">
            <FaPinterest className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-4 mt-20 text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© 2025 | all rights reserved</p>
        <p>Created by Rohit Mishra</p>
      </div>
    </div>
  )
}

export default Contact
