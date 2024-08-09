import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TiHomeOutline } from 'react-icons/ti';
import { IoPersonOutline, IoDocumentTextOutline, IoShareSocialOutline } from 'react-icons/io5';
import { PiTelevision } from 'react-icons/pi';
import { FaStar } from 'react-icons/fa';
import { TfiMenu } from 'react-icons/tfi';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex flex-row justify-between bg-deepBlue sticky  top-0 z-40 md:bg-deepBlue/60 md:backdrop-blur-md  ">
        
          
      <div className={`h-[70px] w-[40%]    md:w-[20%] lg:w-[40%]`}>
      <NavLink  className="cursor-pointer"  onClick={() => window.location.reload()}>  <p className="text-lightBlue300 text-2xl md:text-3xl pt-5 pl-10">AM</p></NavLink>
      </div>

       

      <div className="flex w-[60%]  md:w-[80%]  lg:w-[60%]  md:pr-[] flex-row ">
       
                    

       {/*
              isOpen &&(          
                          <div className='   w-[100%]  top-10 justify-start z-50   md:hidden'>
                                 <NavLink to="/" onClick={changeState} > <p className='text-white'>Home</p></NavLink> 
                                 <NavLink to="/about" onClick={changeState} > <p className='text-white'>About</p></NavLink> 
                                 <NavLink to="/projects" onClick={changeState} > <p className='text-white'>Project</p></NavLink> 
                                 <NavLink to="/resume" onClick={changeState} > <p className='text-white'>Resume</p></NavLink> 
                                 <button className='bg-lightBlue'>Share</button>
                               
                                
                               
                          </div>
              )*/
       }
                        
                




            

        <ul className={`hidden  md:flex md:flex-row md:space-x-7  lg:space-x-10 md:mt-6 md:ml-10  lg:ml-52 `}>
          <li className="group cursor-pointer relative">
            <NavLink to="/">
              <TiHomeOutline color="white" size={23} className="inline-block -mt-2 mr-1" />
              <span className="text-white font-mullish text-xl">Home</span>
              <br />
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-300"></div>
            </NavLink>
          </li>
          <li className="group cursor-pointer relative">
            <NavLink to="/about">
              <IoPersonOutline color="white" size={21} className="inline-block -mt-2 mr-1" />
              <span className="text-white font-mullish text-xl">About</span>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </NavLink>
          </li>
          <li className="group cursor-pointer relative">
            <NavLink to="/projects">
              <PiTelevision color="white" size={25} className="inline-block -mt-2 mr-1" />
              <span className="text-white font-mullish text-xl">Project</span>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-300"></div>
            </NavLink>
          </li>
          <li className="group cursor-pointer relative">
            <NavLink to="/resume">
              <IoDocumentTextOutline color="white" size={23} className="inline-block -mt-2 mr-1" />
              <span className="text-white font-mullish text-xl">Resume</span>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-300"></div>
            </NavLink>
          </li>
          <li> 
             <Link to="https://github.com/Ashutosh692003/Portfolio_Website.git" >
            <button className="bg-green-500 w-[70px] space-x-2 rounded">
              <IoShareSocialOutline color="white" className="inline-block -mt-1" />
              <FaStar color="white" className="inline-block -mt-1" />
            </button>
            </Link>
          </li>
        </ul>

        <div className="md:hidden flex w-[100%] justify-end pr-[15%] pt-[8%]  ">
          <button id="menu-button" onClick={changeState} className='mb-[5%]'>
            {isOpen ? <ImCross color="blue" size={30} /> : <TfiMenu color="blue" size={25} />}
          </button>
        </div> 
      </div>
      { isOpen &&
                             
                          
                          <div className={`md:hidden absolute z-50  flex flex-col top-[85%] pl-[40%]    bg-deepBlue w-[100%]    
                          
                          
                    `}> 
               
                          <NavLink  to="/" onClick={changeState} className="mb-4">
                      
                          <TiHomeOutline color="white" size={23} className="inline-block -mt-2 mr-1" />
                          <span className="text-white font-mullish text-xl">Home</span>
                          </NavLink>
                          <NavLink to="/about" onClick={changeState} className="mb-4">
                          <IoPersonOutline color="white" size={21} className="inline-block -mt-2 mr-1" />
                          <span className="text-white font-mullish text-xl">About</span></NavLink>
                          <NavLink to="/projects" onClick={changeState} className="mb-4">
                          <PiTelevision color="white" size={25} className="inline-block -mt-2 mr-1" />
                          <span className="text-white font-mullish text-xl">Project</span></NavLink>
                          <NavLink to="resume" onClick={changeState} className="mb-4">  <IoDocumentTextOutline color="white" size={23} className="inline-block -mt-2 mr-1" />
                          <span className="text-white font-mullish text-xl">Resume</span></NavLink>
                        
             <NavLink to="https://github.com/Ashutosh692003/Portfolio_Website.git" className="mb-4">
            <button className="bg-green-500 w-[70px] space-x-2 rounded ml-[2vw] mt-1vw">
              <IoShareSocialOutline color="white" className="inline-block -mt-1" />
              <FaStar color="white" className="inline-block -mt-1" />
            </button>
            </NavLink>
          
                         

               
                 </div>
                  }
    </div>
  );
}

export default Header;
