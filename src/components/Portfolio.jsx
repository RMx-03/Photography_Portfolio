import { useState } from 'react'
import ScrollArrow from './ScrollArrow'

const categories = ['All', 'People', 'Architecture', 'Moments']

const portfolioImages = [
  { src: 'https://source.unsplash.com/random/800x600?architecture', category: 'Architecture', className: '' },
  { src: 'https://source.unsplash.com/random/800x600?building', category: 'Architecture', className: '' },
  { src: 'https://source.unsplash.com/random/800x600?people', category: 'People', className: 'wide' },
  { src: 'https://source.unsplash.com/random/800x600?portrait', category: 'Moments', className: 'tall' },
  { src: 'https://source.unsplash.com/random/800x600?nature', category: 'Moments', className: 'wide' },
  { src: 'https://source.unsplash.com/random/800x600?street', category: 'People', className: '' },
]

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showMore, setShowMore] = useState(false)

  const filteredImages = portfolioImages.filter(img => 
    activeCategory === 'All' || img.category === activeCategory
  )

  return (
    <div id="portfolio" className="min-h-screen py-16 relative px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-row gap-16">
          <div className="w-3/4">
            <div className="portfolio-grid">
              {filteredImages.slice(0, showMore ? undefined : 6).map((img, index) => (
                <div key={index} className={img.className}>
                  <img src={img.src} alt={`Portfolio ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="mt-8 text-left">
              <button
                className="load-more"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? '← Show Less' : 'Load More →'}
              </button>
            </div>
          </div>
          
          <div className="w-1/4">
            <h2 className="text-2xl font-bold mb-8">PORTFOLIO</h2>
            <nav className="sticky top-8">
              <ul className="space-y-4">
                {categories.map(category => (
                  <li key={category}>
                    <button
                      className={`nav-link ${activeCategory === category ? 'active' : ''}`}
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
      <ScrollArrow targetId="about" />
    </div>
  )
}

export default Portfolio