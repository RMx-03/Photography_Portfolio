import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ScrollArrow from './ScrollArrow'

const categories = ['All', 'People', 'Architecture', 'Moments']

const portfolioImages = [
  { src: '/images/architecture/danist-soh-dqXiw7nCb9Q-unsplash.jpg', category: 'Architecture' },
  { src: '/images/architecture/lance-anderson-QdAAasrZhdk-unsplash.jpg', category: 'Architecture' },
  { src: '/images/people/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg', category: 'People' },
  { src: '/images/moments/alef-morais-xhVMvxRYs2g-unsplash.jpg', category: 'Moments' },
  { src: '/images/moments/alex-alvarez-63YVMrL2d6g-unsplash.jpg', category: 'Moments' },
  { src: '/images/people/aiony-haust-owp8uQgoK8U-unsplash.jpg', category: 'People' },
  { src: '/images/nature/jeremy-bishop-EwKXn5CapA4-unsplash.jpg', category: 'Nature' }
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

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div id="portfolio" className="section-container">
      <div className="max-w-[1400px] mx-auto px-16 py-24">
        <div className="grid grid-cols-4 gap-16">
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-4">
              {filteredImages.slice(0, showMore ? undefined : 6).map((img, index) => (
                <div 
                  key={index} 
                  className="aspect-[3/4] overflow-hidden cursor-pointer"
                  onClick={() => handleImageClick(img, index)}
                >
                  <img 
                    src={img.src} 
                    alt={`Portfolio ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button
                className="load-more text-lg"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? '← Show Less' : 'Load More →'}
              </button>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl text-white font-bold mb-12">PORTFOLIO</h2>
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
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={handleClose}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
              onClick={handleClose}
            >
              <FaTimes size={24} />
            </button>
            
            <button 
              className="absolute left-8 text-white hover:text-gray-300 transition-colors"
              onClick={handlePrevious}
            >
              <FaChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute right-8 text-white hover:text-gray-300 transition-colors"
              onClick={handleNext}
            >
              <FaChevronRight size={24} />
            </button>

            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              src={filteredImages[currentImageIndex].src}
              alt="Selected portfolio"
              className="max-h-[80vh] max-w-[80vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex items-center gap-4">
              <span>{currentImageIndex + 1}</span>
              <div className="w-12 h-[1px] bg-white"></div>
              <span>{filteredImages.length}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollArrow targetId="about" />
    </div>
  )
}

export default Portfolio