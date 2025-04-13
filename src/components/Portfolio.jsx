import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ScrollArrow from './ScrollArrow'

const categories = ['All', 'People', 'Architecture', 'Nature', 'Moments']

const portfolioImages = [
  { src: 'public/images/nature/casey-horner-4rDCa5hBlCs-unsplash.jpg', category: 'nature', size: 'normal' },
  { src: '/images/architecture/lance-anderson-QdAAasrZhdk-unsplash.jpg', category: 'Architecture', size: 'normal' },
  { src: '/images/people/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg', category: 'People', size: 'tall' },
  { src: '/images/moments/alef-morais-xhVMvxRYs2g-unsplash.jpg', category: 'Moments', size: 'normal' },
  { src: '/images/nature/urban-vintage-78A265wPiO4-unsplash.jpg', category: 'Nature', size: 'normal' },
  { src: '/images/moments/alex-alvarez-63YVMrL2d6g-unsplash.jpg', category: 'Moments', size: 'wide' },
  { src: '/images/people/aiony-haust-owp8uQgoK8U-unsplash.jpg', category: 'People', size: 'normal' },  
  { src: '/images/nature/jeremy-bishop-EwKXn5CapA4-unsplash.jpg', category: 'Nature', size: 'tall' },
  { src: '/images/moments/aleksandar-andreev-zbUl3BLNjBM-unsplash.jpg', category: 'Moments', size: 'regular' },
  { src: '/images/people/farol-106-WyT3qwO2c8s-unsplash.jpg', category: 'People', size: 'tall' },
  { src: '/images/nature/florian-van-duyn-Dm-qxdynoEc-unsplash.jpg', category: 'Nature', size: 'regular' },
   
  
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
    <div id="portfolio" className="section-container bg-black min-h-screen py-24">
      <div className="max-w-[1400px] mx-auto px-16">
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
                    className="w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-300"
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
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-4"
              onClick={handlePrevious}
            >
              <FaChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-4"
              onClick={handleNext}
            >
              <FaChevronRight size={24} />
            </button>

            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              src={selectedImage.src}
              loading="lazy"
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

      {/* <ScrollArrow targetId="about" /> */}
    </div>
  )
}

export default Portfolio