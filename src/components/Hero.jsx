import { FaInstagram, FaTelegram, FaPinterest } from 'react-icons/fa'
import ScrollArrow from './ScrollArrow'

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen relative mb-24">
      <div className="hero-container flex items-center">
        {/* Left Section */}
        <div className="left-section w-1/2 p-16">
          <div className="relative">
            <div className="vertical-line"></div>
            <div className="flex flex-col items-start gap-8">
              <p className="text-lg">Dembitska</p>
              <div className="name-section">
                <h1 className="text-7xl font-bold hover:text-gray-700 transition-colors">
                  SOFIA<br />DEMBITSKA
                </h1>
                <p className="quote-text ml-32 mt-8 max-w-md">
                  "Photography is the art of capturing moments that will never happen again and sharing them with the world, creating a timeless connection between the past and the present."
                </p>
              </div>
              <div className="social-icons flex flex-col gap-3 mt-auto">
                <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-700 transition-colors" />
                <FaTelegram className="w-6 h-6 cursor-pointer hover:text-gray-700 transition-colors" />
                <FaPinterest className="w-6 h-6 cursor-pointer hover:text-gray-700 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Images */}
        <div className="right-section w-1/2 relative">
          <div className="images-container">
            <img 
              src="/images/Model.png"
              alt="Sofia Dembitska"
              className="hero-image  hero-image-center"
            />
            {/* <img 
              src="/images/HeroModel.png"
              alt="Sofia Dembitska"
              className="hero-image hero-image-middle"
            />
            <img
              src="/images/HeroModel2.png"
              alt="Sofia Dembitska"
              className="hero-image hero-image-right"
            /> */}
          </div>
        </div>
      </div>
      <ScrollArrow targetId="portfolio" />
    </div>
  )
}

export default Hero