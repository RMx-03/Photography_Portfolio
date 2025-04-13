import { FaInstagram, FaTelegram, FaPinterest } from 'react-icons/fa'
import ScrollArrow from './ScrollArrow'

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen relative">
      {/* Desktop Version */}
      <div className="hidden md:block">
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
                className="hero-image hero-image-center"
              />
            </div>
          </div>
          <ScrollArrow targetId="portfolio" />
        </div>        
      </div>

      {/* Mobile Version */}
      <div className="md:hidden min-h-screen">
        <div className="relative h-full">
          {/* Top Half - Light Background */}
          <div className="h-[60vh] bg-[#b9b9b9] relative">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="text-center mt-4 py-4">
                <p className="text-lg">Dembitska</p>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 flex">
                {/* Left Side - Social Icons */}
                <div className="w-1/3 relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6">
                    <a href="#" className="text-black hover:text-gray-700 transition-colors">
                      <FaInstagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-black hover:text-gray-700 transition-colors">
                      <FaTelegram className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-black hover:text-gray-700 transition-colors">
                      <FaPinterest className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                {/* Right Side - Image */}
                <div className="w-2/3 relative">
                  <img 
                    src="/images/Model.png"
                    alt="Sofia Dembitska"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            {/* Name at the bottom of top section */}
            <div className="absolute bottom-0 left-0 w-full">
              <h1 className="text-4xl font-bold text-black px-6 ">
                SOFIA
              </h1>
            </div>
          </div>

          {/* Bottom Half - Black Background */}
          <div className="h-[40vh] bg-black relative">
            {/* Name at the top of bottom section */}
            <div className="absolute -top-3 left-0 w-full">
              <h1 className="text-4xl font-bold text-white px-6 pt-4">
                DEMBITSKA
              </h1>
            </div>
            <div className="h-full flex items-center justify-end px-6">
              <p className="text-md text-right text-gray-300 max-w-[280px]">
                "Photography is the art of capturing moments that will never happen again and sharing them with the world, creating a timeless connection between the past and the present."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero