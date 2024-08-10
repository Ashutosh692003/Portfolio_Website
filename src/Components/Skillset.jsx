import Card from "./Card";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandBootstrap } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
const Skillset = () =>{

     
   let  skills = [<FaJava  color="white" className="inline-block" size={70}/>,<IoLogoJavascript  color="white" className="inline-block" size={70} />,<FaReact  color="white" className="inline-block" size={70} />,<TbBrandBootstrap  color="white" className="inline-block" size={70}/>,<RiTailwindCssFill  color="white" className="inline-block" size={70}/>,<SiMysql  color="white" className="inline-block" size={70}/>,<SiSpringboot  color="white" className="inline-block" size={70} />, <FaGitAlt  color="white" className="inline-block" size={70}/>]

      return (       
         <div className=" pl-[2vw] pr-[2vw]   w-full  pb-24 md:pl-20 md:w-[90%]  md:pr-20">
        <p className="font-mullish text-white  text-2xl md:text-3xl  text-center pl:[10vw] pr-[10vw] md:pr-20 pb-14 pt-10 md:pl-2 ">Professional <span className="text-lightBlue">Skillset</span></p>
        <div className=" flex flex-wrap">
                          
             
                  
                             {
                                          skills.map((skill)=>(
                                                  <Card icon = {skill}></Card>
                                          ))
                             }
        </div>
        </div>
      )
}
export default Skillset;