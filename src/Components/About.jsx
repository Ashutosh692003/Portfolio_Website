import Skillset from "./Skillset";
import Tools from "./Tools";

const About = () =>{
     return (
        <div className=" bg-deepBlue bg-opacity-45 ">
        

              
                       {/*part 1 */}

                       <div   className="flex flex-col   md:flex-row  ml-[10vw] mr-[10vw] md:ml-10 md:mr-10 md:pt-24 ">

<div className="w-[100%] ml-[5vw] mr-[5vw] pt-10  md:ml-5  md:mr-0 md:w-[60%] md:pl-28 md:pt-24">
   
          <p className="font-mullish text-white text-3xl">Get to <span className="text-lightBlue">know me</span></p>
                       
                        <div className="pt-5">
                                         <p className="font-mullish text-white text-xl">Hii Everyone,I am <span className="text-lightBlue">Ashutosh</span> from <span className="text-lightBlue">Indore India.</span></p>
                                         <p className="font-mullish text-white text-xl">I am currently pursuing my <span className="text-lightBlue">Bachelor's</span> degree in <span className="text-lightBlue">Computer Science</span> from <span className="text-lightBlue">Swami Vivekanand College of Engineering ,Indore.</span> </p>
                                         <p></p>

                        </div>
   
   </div>  

   <div className="  pr-[13vw] mt-[5vh]   md:pl-14 ">


                 <img src="about_img.png" alt="" className="h-[320px]  md:h-[400px] w-full shrink"/>

   </div>

</div>

{/*part 2 */}


<div className="ml-[10%] mr-[10%">
                         
             <Skillset/>   
             <Tools/>                      

</div> 


        </div>
     )

}
export default About;