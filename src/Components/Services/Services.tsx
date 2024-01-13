import { Johnny, Irrigation, Water, Water2, Water1, Irrigation2 } from "../../assets/img";
import Reveal from "react-awesome-reveal";
import {useState} from "react"
const Services = () => {
  const [isFocus, setIsFocus] = useState(false)
  const [onSet, setIsOnSet] = useState(false) 
  const [transition, setTrans] =useState(false)

  const handleMouseEnter = () => setIsFocus(true);
  const handleMouseLeave = () => setIsFocus(false);
  const handMouse = () => setIsOnSet(true)
  const handMouseOff =()=> setIsOnSet(false)
  const trans = () => setTrans(true)
  const transitions = () => setTrans(false)

     return (
      <Reveal>
       <div className="h-full p-16">
         <div className="text-center font-bold text-2xl">
        <h2>Our Services</h2>
      </div>
    
      <div className="flex flex-col md:flex-row lg:flex-row rounded-lg bg-blue-100 md:rounded-l-full lg:rounded-l-full shadow-2xl p-4 m-3  ">
       
        <div className="mx-auto">
           <img className=" w-[300px] h-[300px] md:w-[350px] shadow-md md:h-[350px]  lg:w-[500px] lg:h-[500px] rounded-full relative" src={isFocus ? Johnny : Water1} alt="johhnnt" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
           </div>
           <div className=" mx-auto md:w-[30%] lg:w-[60%] md:h-mx-auto lg:flex-row justify-center pt-4 lg:pt-28 items-center">
             <h1 className="text-2xl md:text-lg lg:text-4xl font-bold underline p-4 text-center">Distribution</h1>
             <p className="text-md md:text-md lg:text-lg">Pioneering advancements in water distribution, Aqua Hydro leads the way in developing innovative technologies that revolutionize water supply systems. Our expertise extends to cutting-edge solutions, including precision water delivery methods and intelligent water management systems.</p>
           </div>
        
                  </div>     
               
                  
         <div className="flex flex-col md:flex-row lg:flex-row  p-4 m-3">
         
          <div className="mx-auto text-wrap md:w-[30%] lg:w-[60%] h-auto lg:flex-row justify-center pt-4 lg:pt-28 items-center">
             <h1 className="text-2xl md:text-lg lg:text-4xl font-bold underline p-4 text-center">Drinking</h1>
             <p className="text-md md:text-md lg:text-lg">Our dedication to advancing water quality extends to the development of cutting-edge purification technologies, such as advanced filtration systems and state-of-the-art water treatment processes. Aqua Pure is a trailblazer in the industry, constantly striving to improve access to clean drinking water through sustainable practices and eco-friendly solutions.</p>
           </div>
                   <div className="mx-auto">
           <img className=" w-[300px] h-[300px] md:w-[350px] shadow-md md:h-[350px]  lg:w-[500px] lg:h-[500px] rounded-full relative"  src={transition ? Water : Water2} onMouseEnter={trans}  onMouseLeave={transitions}  alt="jhhnnt"/>
           </div> 
            
         </div>
            <div className="flex flex-col md:flex-row lg:flex-row bg-green-100 md:rounded-l-full  lg:rounded-l-full shadow-xl p-4 m-3">
                               <div className=" mx-auto">
           <img className=" w-[300px] h-[300px] md:w-[350px] shadow-md md:h-[350px]  lg:w-[500px] lg:h-[500px] rounded-full relative"  src={onSet ? Irrigation : Irrigation2} onMouseEnter={handMouse} onMouseLeave={handMouseOff} alt="johhnn"/>
           </div>
             <div className="mx-auto text-wrap md:w-[30%] lg:w-[60%] h-auto lg:flex-row justify-center pt-4 lg:pt-28 items-center">
             <h1 className="text-2xl md:text-lg lg:text-4xl font-bold underline p-4 text-center">Irrigation</h1>
             <p className="text-md md:text-md lg:text-lg">Aqua Water is committed to providing sustainable irrigation solutions that help farmers and businesses conserve water and protect the environment. The company's irrigation services are designed to improve water efficiency and reduce water waste. Aqua Water is also a leader in the development of innovative irrigation technologies, such as drip irrigation and smart irrigation systems.</p>
           </div>
         </div>
         
       
               </div>
               </Reveal>
     )
   }
   
   export default Services