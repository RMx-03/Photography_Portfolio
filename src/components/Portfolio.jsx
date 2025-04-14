import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ScrollArrow from './ScrollArrow'

const categories = ['All', 'People', 'Architecture', 'Nature', 'Moments']

const portfolioImages = [
  { src: '/images/nature/sebastian-unrau-CoD2Q92UaEg-unsplash.webp', category: 'Nature', size: 'normal', year: '2023' },
  { src: '/images/architecture/lance-anderson-QdAAasrZhdk-unsplash.webp', category: 'Architecture', size: 'normal', year: '2023' },
  { src: '/images/people/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.webp', category: 'People', size: 'tall', year: '2023' },
  { src: '/images/moments/alef-morais-xhVMvxRYs2g-unsplash.webp', category: 'Moments', size: 'normal', year: '2023' },
  { src: '/images/nature/urban-vintage-78A265wPiO4-unsplash.webp', category: 'Nature', size: 'normal', year: '2023' },
  { src: '/images/moments/alex-alvarez-63YVMrL2d6g-unsplash.webp', category: 'Moments', size: 'wide', year: '2023' },
  { src: '/images/people/aiony-haust-owp8uQgoK8U-unsplash.webp', category: 'People', size: 'normal', year: '2023' },  
  { src: '/images/nature/clement-m-igX2deuD9lc-unsplash.webp', category: 'Nature', size: 'tall', year: '2023' },
  { src: '/images/moments/aleksandar-andreev-zbUl3BLNjBM-unsplash.webp', category: 'Moments', size: 'regular', year: '2023' },
  { src: '/images/people/farol-106-WyT3qwO2c8s-unsplash.webp', category: 'People', size: 'tall', year: '2023' },
  { src: '/images/nature/florian-van-duyn-Dm-qxdynoEc-unsplash.webp', category: 'Nature', size: 'regular', year: '2023' },
]

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showMore, setShowMore] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages = portfolioImages.filter(img => 
    activeCategory === 'All' || img.category === activeCategory
  )

  const handleImageClick = (image, index) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const handleClose = () => {
    setSelectedImage(null)
  }

  const handlePrevious = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    )
    setSelectedImage(filteredImages[currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1])
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    )
    setSelectedImage(filteredImages[currentImageIndex === filteredImages.length - 1 ? 0 : currentImageIndex + 1])
  }

  return (
    <div id="portfolio" className="section-container min-h-screen py-24 bg-black">
      {/* Desktop Version */}
      <div className="hidden md:block max-w-[1400px] mx-auto px-16">
        <div className="grid grid-cols-4 gap-16">
          <div className="col-span-3">
            <div className="portfolio-grid">
              {filteredImages.slice(0, showMore ? undefined : 7).map((img, index) => (
                <div 
                  key={index} 
                  className={`portfolio-item ${img.size} cursor-pointer overflow-hidden`}
                  onClick={() => handleImageClick(img, index)}
                >
                  <img 
                    src={img.src} 
                    alt={`Portfolio ${index + 1}`} 
                    loading="lazy"
                    className="w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button
                className="text-gray-400 hover:text-white transition-colors text-lg"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? '← Show Less' : 'Load More →'}
              </button>
            </div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl text-white font-bold mb-10">PORTFOLIO</h2>
            <nav className="sticky top-8">
              <ul className="space-y-6">
                {categories.map(category => (
                  <li key={category}>
                    <button
                      className={`nav-link text-lg ${activeCategory === category ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        {/* <ScrollArrow targetId="about" /> */}
      </div>

      {/* Mobile Version */}
      <div className="md:hidden px-4">
        <h2 className="text-2xl text-white font-bold mb-6">PORTFOLIO</h2>
        <div className="flex overflow-x-auto space-x-4 mb-6 pb-2 categories-scroll">
          {categories.map(category => (
            <button
              key={category}
              className={`whitespace-nowrap px-4 py-2 ${
                activeCategory === category 
                  ? 'bg-white text-black' 
                  : 'text-white border border-white'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="masonry-grid">
          {filteredImages.slice(0, showMore ? undefined : 6).map((img, index) => (
            <div 
              key={index}
              className="masonry-item mb-4"
              onClick={() => handleImageClick(img, index)}
            >
              <img 
                src={img.src} 
                alt={`Portfolio ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            className="text-gray-400 hover:text-white transition-colors text-lg"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? '← Show Less' : 'Load More →'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <button onClick={handleClose}>
                <FaChevronLeft className="text-white text-xl" />
              </button>
              <span className="text-white">Dembitska</span>
              <div className="w-6" />
            </div>

            <div className="flex-1 relative flex items-center justify-center p-4">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                src={selectedImage.src}
                alt="Selected portfolio"
                loading="lazy"
                className="max-h-full w-full object-contain"
              />
              <div className="absolute top-4 right-4 text-white text-sm">
                {selectedImage.year}
              </div>
            </div>

            <div className="p-4 border-t border-gray-800 flex justify-between items-center">
              <button onClick={handlePrevious}>
                <FaChevronLeft className="text-white text-xl" />
              </button>
              <div className="text-white flex items-center gap-2">
                <span>{currentImageIndex + 1}</span>
                <span>/</span>
                <span>{filteredImages.length}</span>
              </div>
              <button onClick={handleNext}>
                <FaChevronRight className="text-white text-xl" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Portfolio