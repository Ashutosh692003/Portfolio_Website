
const Card = ({icon}) =>{

            return (
                <div className="border border-lightBlue rounded-lg h-[10vh] cardHeight  w-[35vw]  md:h-[140px] md:w-[210px] hover:shadow-md hover:translate-[5px] hover:shadow-lightBlue300 transition-transform duration-300 ml-[2vw] mr-[2vw]  md:mr-0 md:ml-8 mt-8 "> 
                     
                    <div className="   cardPadding py-[5%]  px-[30%] md:py-[15%]">
                        {icon}
                    </div>
                           
                </div>
            )
}
export default Card;