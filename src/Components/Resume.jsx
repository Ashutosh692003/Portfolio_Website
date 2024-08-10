import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { FaDownload } from "react-icons/fa";
import { useEffect } from 'react';


pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';


const Resume = () => {
    const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
           
        const[load,setLoad]  =  useState(true)
    const resumeUrl = "Ashutosh_Resume.pdf";

         function changeLoad (){
             setLoad(false)
         }

    return (
        <div className='bg-deepBlue bg-opacity-45  overflow-y-hidden flex flex-col justify-center bg-cover'>
             <div className=' marginLeftRight ml-[30vw] mr-[30vw]  md:ml-[40vw] md:mr-[40vw] pt-16'>
              <a href={resumeUrl} download="Ashutosh_Resume.pdf">
                    <button className='bg-blue-500 text-white py-2 px-[1vw]  w-full  md:w-[18vw] md:px-4 rounded hover:bg-lightBlue300' > Download Resume <FaDownload className='inline-block'/></button>
                </a>
                </div>
                      {load &&  <div  className='h-[60vh] '> <div className='spinner ml-[30vw] mr-[40vw] mt-[40%] md:ml-[46%] md:mt-[20%]'></div> </div>}
              <div className='justify-center overflow-hidden h-full mt-[10vh] mb-[10vh]'>
                       
            <Document file={resumeUrl}  onLoadSuccess={changeLoad} className="flex justify-center md:justify-center flex-auto">
               
                    <Page pageNumber={1} scale={width>786 ? 1.4 : .6}  className="scale"  />
              
            </Document>

            </div>

           <div className='  marginLeftRight ml-[30vw] mr-[30vw] md:mr-[40vw]  md:ml-[40vw] pt-8 pb-10'>
              <a href={resumeUrl} download="Ashutosh_Resume.pdf">
                    <button className='bg-blue-500 text-white py-2 w-full  md:w-[18vw] px-[1vw] md:px-4 rounded hover:bg-lightBlue300' > Download Resume <FaDownload className='inline-block'/></button>
                </a>
                </div>
        </div>
    );
};

export default Resume;

