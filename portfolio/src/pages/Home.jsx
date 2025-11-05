import React from 'react'
import ThemeToggle from '../component/ThemeToggle'
import BackgroundEffect from '../component/BackgroundEffect'
import Navbar from '../component/Navbar'
import Herosection from '../component/Herosection'
import AboutMe from '../component/AboutMe'
import Skills from '../component/Skills'
import ProjectsSection from '../component/ProjectsSection'
const Home = () => {
  return (
    <div className=' min-h-screen bg-background text-foreground overflow-x-hidden ' >
    {/* ThemeToggle  */}
    <ThemeToggle />
    {/* Background Effect  */}
     <BackgroundEffect />
    {/* Navbar  */}
    <Navbar />  
    {/* Main Content  */}
     <main>
      <Herosection />
      <AboutMe />
      <Skills />
      <ProjectsSection />
     </main>

    </div>

  )
}

export default Home