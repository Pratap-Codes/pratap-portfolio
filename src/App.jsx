import { lazy, useState } from 'react'
import ThemeToggle from './Components/ThemeToggle'
import {Navbar, Hero, About, Skill, Contact, Footer, Project} from './index'
import Loader from './Components/loader/Loader';
function App() {
const [loading, setLoading] = useState(true);
  return (
    <>

    {loading && <Loader onComplete={()=> setLoading(false)}/>}
    <div className='bg-[#f8f9fa] dark:bg-[#0b0b0a]'>
    <Navbar />
    <Hero />
    <ThemeToggle/>
    <About />
    <Skill />
    <Project />
    <Contact />
    <Footer />
    </div>
    </>

  )
}

export default App
