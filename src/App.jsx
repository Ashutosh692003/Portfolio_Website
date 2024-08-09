import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Project from './Components/Project';
import Resume from './Components/Resume';
import { useState, useEffect } from 'react';
import Loader from './Components/Loader';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay only on initial render
        const timer = setTimeout(() => setLoading(false), 2000); // Adjust time as needed
        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures this runs only on initial render

    return (
        <div className='   bg-[url(./assets/black_sky_1.avif)] h-[100%] w-[100%]  '>
            {loading ? (
               <Loader></Loader> // Show loader during initial load
            ) : (
                <>
                    <Header />
                
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/projects' element={<Project />} />
                        <Route path='/resume' element={<Resume />} />
                    </Routes>
                    
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
