import { FaInstagram, FaTelegram, FaPinterest } from 'react-icons/fa'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()    
  }

  return (
    <div id="contact" className="section-container min-h-screen py-16 bg-black">
      {/* Desktop Version */}
      <div className="hidden md:block max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl text-white font-bold mb-8">HAVE ANY QUESTIONS?</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="contact-input"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="contact-input"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="6"
                  className="contact-input"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-dark px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl text-white font-bold mb-8">KEEP IN TOUCH</h2>
            <div className="space-y-4 text-gray-300">
              <p>sofiya.dembicka@gmail.com</p>
              <p>+38 (050) 713 71 23</p>
              <p>+38 (068) 604 18 26</p>
            </div>
            <div className="flex gap-6 mt-8">
              <FaInstagram className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-300 transition-colors" />
              <FaTelegram className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-300 transition-colors" />
              <FaPinterest className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-300 transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden px-4 text-white">
        <h2 className="text-2xl font-bold mb-8">HAVE ANY QUESTIONS?</h2>
        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-white/30 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full bg-transparent border-b border-white/30 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full bg-transparent border-b border-white/30 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-3 font-medium"
          >
            Send
          </button>
        </form>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">KEEP IN TOUCH</h2>
          <div className="space-y-3 text-sm opacity-80">
            <p>sofiya.dembicka@gmail.com</p>
            <p>+38 (050) 713 71 23</p>
            <p>+38 (068) 604 18 26</p>
          </div>
        </div>

        <div className="flex justify-center gap-8">
          <FaInstagram className="w-6 h-6" />
          <FaTelegram className="w-6 h-6" />
          <FaPinterest className="w-6 h-6" />
        </div>
      </div>

      <div className="text-center text-gray-500 mt-16">
        <p>© 2024 | all rights reserved</p>
        <p>Created by Rohit Mishra</p>
      </div>
    </div>
  )
}

export default Contact