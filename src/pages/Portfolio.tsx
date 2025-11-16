import Home from './Home'
import About from './About'
import Resume from './Resume'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Navbar from '../components/ui/Navbar'

const Portfolio = () => {
    return (
        <>
            <div className="portfolio">
                <Navbar />
                <Home />
                {/* <About />
                <Resume />
                <Skills />
                <Projects />
                <Contact /> */}
            </div>
        </>
    )
}

export default Portfolio