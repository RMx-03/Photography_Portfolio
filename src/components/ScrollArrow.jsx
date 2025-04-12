import { FaChevronDown } from 'react-icons/fa'

const ScrollArrow = ({ targetId }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <FaChevronDown 
      className="scroll-arrow"
      onClick={scrollToSection}
      size={24}
    />
  )
}

export default ScrollArrow