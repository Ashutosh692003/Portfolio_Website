import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const SmallProjectCard = ({data}) =>{
             
                 return (
                    <div className="border border-lightBlue rounded-lg  h-[550px] w-[350px] hover:shadow-md hover:translate-[5px] hover:shadow-lightBlue300 transition-transform duration-300  md:ml-8 mt-8 pb-10 ">
                                 
                             {/* image space */}   
                              <div className="flex h-[45%]">
                                       <div className="bg-[url(computer.png)] h-[150px] w-[260px] bg-cover bg-no-repeat  ml-10 mr-8 mt-9  ">
                                       
                                             <img src={data.imgLink} alt="" className=" h-[120px] ml-16 mt-3"/>
                                      
                                           
                                  </div>
                                
                                </div>  
{/* Content space */}


                                 <div>
                                          <p className="text-white font-mullish text-lg mt-1 ml-5">{data.projectName}</p>
                                          <p className="text-white font-mullish ml-5 mr-5 mt-4">{data.projectDescription}</p>
                                          {
                                             data. gitHubLink2==""  ?
                                          <button className="bg-lightBlue rounded-md w-24 h-9 text-white hover:bg-lightBlue300  mt-6 ml-28"><Link to={data. gitHubLink}>GitHub</Link> <FaGithub color="white" className="inline-block" /></button> :
                                            <div className="flex flex-row justify-center">
                                                      <button className="bg-lightBlue rounded-md w-24 h-9 text-white hover:bg-lightBlue300  mt-6 ml-1"><Link to={data. gitHubLink}>GitHub</Link> <FaGithub color="white" className="inline-block" /></button>

                                                       <button className="bg-lightBlue rounded-md w-24 h-9 text-white hover:bg-lightBlue300  mt-6 ml-4"><Link to={data. gitHubLink2}>GitHub</Link> <FaGithub color="white" className="inline-block" /></button>  
                                            </div>
                                          }
                                          
                                              
                                 </div>
                    </div>
                 )
}
export default SmallProjectCard;