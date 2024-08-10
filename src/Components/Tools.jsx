import { SiIntellijidea } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiApachemaven } from "react-icons/si";
import { SiEclipseide } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import Card from "./Card";


const Tools = () =>{

    let tools = [<SiIntellijidea  color="white" className="inline-block" size={70}/>,<FaWindows color="white" className="inline-block" size={70}/>,<VscVscode color="white" className="inline-block" size={70}/>,<FaAws color="white" className="inline-block" size={70}/>
,  <FaGithub color="white" className="inline-block" size={70}/>,   <SiApachemaven color="white" className="inline-block" size={70}/>, <SiEclipseide color="white" className="inline-block" size={70} /> ,<SiPostman color="white" className="inline-block" size={70}/> ]
    return (
                
                 
        <div className="pb-24      md:pl-20 w-[90%] md:pr-20 ">
        <p className="font-mullish text-white text-3xl text-center pr-[10vw] md:pr-[22%] pb-14 pt-10 pl-[10vw] md:pl-[13%] ">My <span className="text-lightBlue">toolkit</span></p>
        <div className=" flex flex-wrap">
                          
             
                  
        {
                                          tools.map((tool)=>(
                                                  <Card icon = {tool}></Card>
                                          ))
                             }
        </div>
        </div>
    )
}
export default Tools;