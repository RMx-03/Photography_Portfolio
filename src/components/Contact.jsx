import { FaInstagram, FaTelegram, FaPinterest } from 'react-icons/fa'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()    
  }

  return (
    <div id="contact" className="section-container min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
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
      <div className="text-center text-gray-500 mt-16">
        <p>© 2024 | all rights reserved</p>
        <p>Created by Rohit Mishra</p>
      </div>
    </div>
  )
}

export default Contact