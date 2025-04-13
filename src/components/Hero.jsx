import { FaInstagram, FaTelegram, FaPinterest } from 'react-icons/fa'

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
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden min-h-screen">
        <div className="relative h-full">
          {/* Top Half - White Background */}
          <div className="h-[60vh] bg-[#b9b9b9] relative">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="text-center py-4">
                <p className="text-xl">Dembitska</p>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 flex">
                {/* Left Side - Name */}
                <div className="w-1/2 flex flex-col justify-center px-4">
                  <h1 className="text-4xl font-bold mt-64">
                    SOFIA
                  </h1>
                  <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 ml-[-1rem]">
                    <FaInstagram className="w-5 h-5" />
                    <FaTelegram className="w-5 h-5" />
                    <FaPinterest className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Right Side - Image and Social Icons */}
                <div className="w-1/2 relative">
                  <img 
                    src="/images/Model.png"
                    alt="Sofia Dembitska"
                    className="h-full w-full object-cover object-center"
                  />                  
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Half - Black Background */}
          <div className="h-[40vh] bg-black px-6 flex flex-col justify-between py-8">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-6">
                DEMBITSKA
              </h1>
              <p className="text-sm text-gray-300">
                "Photography is the art of capturing moments that will never happen again and sharing them with the world, creating a timeless connection between the past and the present."
              </p>
            </div>
            {/* <div className="text-white text-xl">
              <p>PORTFOLIO</p>
            </div> */}
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Hero