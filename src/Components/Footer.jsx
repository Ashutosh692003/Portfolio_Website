import { MdCopyright } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () =>{

              return (
                 <div className=" flex justify-center md:justify-around bg-deepBlue opacity-60 pt-5 pb-5 overflow-hidden">

                         <div >
                                        <p className="text-white font-mullish text-xl">Created by Ashutosh Mishra </p>
                         </div>

                         <div className="hidden md:inline-block">
                                  
                                   <span className="text-white font-mullish text-xl">AM<MdCopyright color="white" className="inline-block"/>2024</span>

                         </div>

                         <div className="hidden md:inline-block">
                         <ul className="flex justify-center">

<li className="cursor-pointer"><FaInstagram  color="pink" size={30}/></li>
<li className="ml-3"> <Link to="https://x.com/ashutosh_692003"><FaTwitter  color="blue"  size={30}/></Link></li>
<li  className="ml-3"> <Link to="https://github.com/Ashutosh692003"><SiGithub  color="blue"  size={30}/></Link></li>
<li  className="ml-3"><Link to="https://www.linkedin.com/in/ashutosh-mishra-b19b00239"><FaLinkedin color="lightblue"  size={30}/></Link>
</li>
</ul>
                         </div>



                 </div>

              );
}
export default Footer;