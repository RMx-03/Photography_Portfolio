import { FaInstagram, FaTelegram, FaPinterest } from 'react-icons/fa'
import ScrollArrow from './ScrollArrow'

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="hero-container p-12 md:p-16 flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 w-full">
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              SOFIA<br />DEMBITSKA
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-md text-right">
              "Photography is the art of capturing moments that will never happen again and sharing them with the world, creating a timeless connection between the past and the present."
            </p>
            <div className="flex gap-6 mt-12">
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
              <FaTelegram className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
              <FaPinterest className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://source.unsplash.com/random/800x1000?portrait"
              alt="Sofia Dembitska"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      <ScrollArrow targetId="portfolio" />
    </div>
  )
}

export default Hero