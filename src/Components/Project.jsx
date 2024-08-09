import SmallProjectCard from "./SmallProjectCard";
const Project = () =>{
                 
                            let project1 = {
                                   imgLink :"ies_img.png",
                                   projectName :"Integrated Eligibility System",
                                   projectDescription :"An Integrated Eligibility System using Spring Boot , Microservices and React JS and MySql database. Crowdworkers register users,and collect information  and then an automated system determines eligibility for various plans. The system offers a user-friendly React JS frontend for efficient plan selection.",
                                   gitHubLink1:"https://github.com/Ashutosh692003/IES_UI.git",
                                   gitHubLink2:"https://github.com/Ashutosh692003/IES-Application.git"

                            }
                            let project2 = {
                                imgLink :"frontoffice_img.png",
                                projectName :"Front Office Management System",
                                projectDescription :"A Front Office Management System for educational institutions using  Thymeleaf, HTML, CSS, and Bootstrap for frontend, and java spring boot &  MVC architecture for backend & MySql as database. Streamlined office operations, improved efficiency, and enhanced user experience through intuitive interface.",
                                gitHubLink :"https://github.com/Ashutosh692003/Front-Office-Management-Project.git",
                                 gitHubLink2:""
                         }

                         let project3 = {
                            imgLink :"blog_img.png",
                            projectName :"Blog Application",
                            projectDescription :"A blog application using Java, Thymeleaf,MySql database and MVC architecture . Users can create, edit, and publish posts and also have signup and login functionality, while dynamic content is efficiently managed through Thymeleaf templates.",
                            gitHubLink :"https://github.com/Ashutosh692003/Blog_Application.git",
                             gitHubLink2:""
                     }
                    let projects = [project1,project2,project3]

    return (
        <div className=" bg-deepBlue bg-opacity-45 overflow-x-hidden  bg-cover h-[100%] ">
                        <p className="text-white text-3xl font-mullish text-center pt-16"> Recent <span className="text-lightBlue">Projects</span></p>  
                        <p className="text-white text-md font-mullish text-center">Here are a few projects i worked recently</p>
                   <div className=" flex pt-16  lg:h-[100vh]  overflow-y-hidden flex-col md:ml-28 md:mr-28 pb-16 items-center md:flex-row md:justify-between overflow-x-hidden flex-wrap">
                                      
                        {
                                projects.map((project)=>(
                                     <SmallProjectCard data={project}></SmallProjectCard>
                                ))      
                        }
                                       
                        

                        </div>
        </div>
    )
                          
                 
    
}
export default Project;