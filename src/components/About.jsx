import ScrollArrow from './ScrollArrow'

const About = () => {
  return (
    <div id="about" className="section-container min-h-screen py-16 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <img 
              src="/images/AboutModel.jpg" 
              alt="About Sofia"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-8">ABOUT ME</h2>
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
      </div>
      <ScrollArrow targetId="contact" />
    </div>
  )
}

export default About