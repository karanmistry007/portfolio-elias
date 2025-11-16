import Navbar from '../components/ui/Navbar';
import About from './About';
import Home from './Home';
// import Contact from './Contact';
// import Projects from './Projects';
// import Resume from './Resume';
// import Skills from './Skills';

// ? MAIN COMPONENT
const Portfolio = () => {
    // ? RENDER
    return (
        <>
            <div className="portfolio">
                {/* // ? NAVIGATION */}
                <Navbar />

                {/* // ? HOME SECTION */}
                <Home />

                {/* // ? ABOUT SECTION */}
                <About />

                {/* // ? RESUME SECTION */}
                {/* <Resume /> */}

                {/* // ? SKILLS SECTION */}
                {/* <Skills /> */}

                {/* // ? PROJECTS SECTION */}
                {/* <Projects /> */}

                {/* // ? CONTACT SECTION */}
                {/* <Contact /> */}
            </div>
        </>
    );
};

export default Portfolio;