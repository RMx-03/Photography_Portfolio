import { FaInstagram, FaTelegram, FaPinterest } from 'react-icons/fa'
import ScrollArrow from './ScrollArrow'

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="hero-container p-24 flex ">
        <div className="flex flex-col md:flex-row items-start justify-between h-full">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="absolute left-0 top-30 h-[350px] w-[2px] bg-black ml-[80px]" />
              <p className="text-lg mb-4">Dembitska</p>
              <div className="vertical-line"></div>
              <h1 className="text-7xl font-bold mb-8">
                SOFIA<br />DEMBITSKA
              </h1>
            </div>
            <div className="flex flex-col items-center gap-6">
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
              <FaTelegram className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
              <FaPinterest className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
            </div>
          </div>
          
          <div className="flex-1 flex justify-between items-start gap-22">
            <p className="text-lg max-w-md text-right mt-44">
              "Photography is the art of capturing moments that will never happen again and sharing them with the world, creating a timeless connection between the past and the present."
            </p>
            <img 
              src="/images/HeroModel3.png"
              alt="Sofia Dembitska"
              className="w-[500px] h-[500px] object-contain"
            />
            <img 
              src="/images/HeroModel.png"
              alt="Sofia Dembitska"
              className="w-[500px] h-auto object-contain"
            />
            <img
              src="/images/HeroModel2.png"
              alt="Sofia Dembitska"
              className="w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
      <ScrollArrow targetId="portfolio" />
    </div>
  )
}

export default Hero