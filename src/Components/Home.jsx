import { TypeAnimation } from "react-type-animation";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Home = () =>{
    return (             
                      <div className="  overflow-hidden" >
                 <div className=    "   bg-deepBlue bg-opacity-45 flex flex-col md:flex-row pb-24   ">
                                    
                                     {/* Part 1 */}
                       <div className=" pt-[10vh] pl-[16vw] pr-[8vw] md:w-[50%] md:pl-[10vw] lg:pl-40 md:mt-40">
                    
                      <p className="text-white font-mullish  text-3xl lg:text-4xl ">Hellow !!!</p>
                      <p className="text-white font-mullish  text-3xl lg:text-5xl mt-6 ">I am <span className="text-lightBlue">Ashutosh Mishra</span></p>

                    <TypeAnimation
      sequence={ [
        // Same substring at the start will only be typed out once, initially
       // wait 1s before replacing "Mice" with "Hamsters"
        ' Software Developer',
        1000,
        ' Freelancer ',
        1000,
        ' Full Stack Java Developer ',
        1000
      ]}
      wrapper="span"
      speed={50}
      className="inline-block  text-lightBlue font-mullish  font-bold  text-2xl lg:text-4xl mt-7"
      
      repeat={Infinity}
    />

                    
                    
                       
                       </div>
                                    {/* right*/}
                        <div className=" ml-[10vw] mr-[10vw] mt-[5vh]   md:ml-48 md:mt-20 md:mr-[0]">
                                     <img src="coding_icon2.png" className="h-[450px]"/>

                        </div>
                                       
                                     
                             

                 </div>
                    {/*part2*/}
                         
                    <div className=" md:pt-40  bg-deepBlue bg-opacity-35 pb-20">
                                      <p className="text-white text-2xl ml-[26vw]  md:text-4xl md:ml-48 font-mullish md:mb-5">My  <span className="text-lightBlue">story</span> begins here</p> 
                                           {/*slot1*/}
                                            
                                             <div className="flex flex-col md:flex-row ">
                                                         <div className="w-[75vw] md:w-[60%] ml-[8vw]  md:ml-10 md:pl-8">
      <p className="text-white font-mullish text-lg mt-5" >My journey into programming started with curiosity and has led to a growing passion for problem-solving.</p>
                                                                
                       <p className="text-white font-mullish text-lg mt-5">Well-versed in <span className="text-lightBlue">Java, JavaScript, and c++ programming languages.</span></p>
                                                                 
                                                <p className="text-white font-mullish text-lg mt-5">I am passionate about developing innovative <span className="text-lightBlue">web technologies and products.</span> </p>
                                                                 
                                          <p className="text-white font-mullish text-lg mt-5">  I bring my product development vision to life through <span className="text-lightBlue">Java Spring boot</span>  and cutting-edge JavaScript frameworks such as <span className="text-lightBlue">React.js.</span> 
                                                                 </p>
                                                         </div>

                                                         <div className="  w-[100%] md:w-[40%]">
                           <img src="./story_1.png" alt="" className=" hidden lg:block h-[400px] ml-[15%] mr-[15%] mt-[8vh]    md:h-[300px] md:ml-48 md:-mt-10"/>
                                                         </div>

                                             </div>

                                              {/*slot2*/}
                                              <div className="mt-20">
                                                  
                                                   <p className="font-mullish text-white text-4xl text-center">FIND ME ON</p>
                                                   <p className="font-mullish text-white text-center">Feel free to <span className="text-lightBlue">connect</span> with me</p>
                                                  
                                                  <div className="mt-5">
                                        <ul className="flex justify-center">

                                          <li className="cursor-pointer"><FaInstagram  color="pink" size={30}/></li>
                                          <li className="ml-3 cursor-pointer"> <Link to="https://x.com/ashutosh_692003"><FaTwitter  color="blue"  size={30}/></Link></li>
<li  className="ml-3 cursor-pointer"> <Link to="https://github.com/Ashutosh692003"><SiGithub  color="blue"  size={30}/></Link></li>
<li  className="ml-3 cursor-pointer"><Link to="https://www.linkedin.com/in/ashutosh-mishra-b19b00239"><FaLinkedin color="lightblue"  size={30}/></Link>
</li>
                                        </ul>
                                                  </div>

                                              </div>
                              
                              
                              
                              </div>    
                 </div>
                     
    );
}
export default Home;