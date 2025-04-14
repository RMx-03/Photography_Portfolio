import ScrollArrow from './ScrollArrow'

const About = () => {
  return (
    <div id="about" className="section-container min-h-screen py-16 relative bg-black text-white">
      {/* Desktop Version */}
      <div className="hidden md:block max-w-[1400px] mx-auto px-16">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="overflow-hidden">
              <img 
                src="/images/AboutModel2.webp" 
                alt="About Sofia"
                loading="lazy"
                className="w-full h-[80vh] object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-2xl font-bold">ABOUT ME</h2>
            <div className="space-y-6 text-gray-300">
              <p>
                Hi there, my name is Sofia and I am a photographer. I've been passionate about photography since I was a child, and it's a love that has only grown stronger with time.
              </p>
              <p>
                My style of photography is characterized by its ability to capture the beauty and emotion of the moment. I believe that every image tells a story, and I strive to capture the essence of that story in every shot.
              </p>
              <p>
                Whether I'm working with clients or taking photos for myself, I always put my heart and soul into every project. I'm a perfectionist when it comes to my work, and I go to great lengths to ensure that every detail is just right.
              </p>
            </div>
          </div>
        </div>
        <ScrollArrow targetId="contact" />
      </div>

      {/* Mobile Version */}
      <div className="md:hidden px-0">
        <div className="w-full">
          <img 
            src="/images/AboutModel2.webp" 
            alt="About Sofia"
            loading="lazy"
            className="w-full h-[60vh] object-cover"
          />
        </div>
        <div className="px-6 pt-8">
          <h2 className="text-2xl font-bold mb-6">ABOUT ME</h2>
          <div className="space-y-4 text-sm text-gray-300">
            <p>
              Hi there, my name is Sofia and I am a photographer. I've been passionate about photography since I was a child, and it's a love that has only grown stronger with time.
            </p>
            <p>
              My style of photography is characterized by its ability to capture the beauty and emotion of the moment. I believe that every image tells a story, and I strive to capture the essence of that story in every shot.
            </p>
            <p>
              Whether I'm working with clients or taking photos for myself, I always put my heart and soul into every project. I'm a perfectionist when it comes to my work, and I go to great lengths to ensure that every detail is just right.
            </p>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default About