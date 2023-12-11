import { Johnny, Irrigation, Water, Water2, Water1, Irrigation2 } from "../../assets/img";
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
       <div className="h-full p-16">
         <div className="flex bg-blue-100 rounded-r-full p-4 m-3 justify-evenly">
           <div className="w-[600px] h-[500px] flex-row  justify-center pt-28  items-center" >
             <h1 className="text-2xl font-bold underline p-4 text-center">Distribution</h1>
             <p className="text-xl">Pioneering advancements in water distribution, Aqua Hydro leads the way in developing innovative technologies that revolutionize water supply systems. Our expertise extends to cutting-edge solutions, including precision water delivery methods and intelligent water management systems. Notably, our emphasis on technological innovation encompasses the implementation of smart water supply systems designed to optimize usage and adapt to varying demands.</p>
           </div>
           <div>
             <img className=" w-[500px] h-[500px] rounded-full relative" src={isFocus ? Johnny : Water1} alt="johhnnt" onMouseEnter={handleMouseEnter}    onMouseLeave={handleMouseLeave}
  />
           </div>
         </div>
         <div className="flex justify-evenly">
                   <div>
           <img className=" w-[500px] h-[500px] rounded-full"  src={transition ? Water : Water2} onMouseEnter={trans}  onMouseLeave={transitions}  alt="johhnnt"/>
           </div>
           <div className="w-[600px] h-auto flex-row justify-center pt-28  items-center" >
             <h1 className="text-2xl font-bold underline p-4 text-center">Drinking</h1>
             <p className="text-xl">Our dedication to advancing water quality extends to the development of cutting-edge purification technologies, such as advanced filtration systems and state-of-the-art water treatment processes. Aqua Pure is a trailblazer in the industry, constantly striving to improve access to clean drinking water through sustainable practices and eco-friendly solutions.</p>
           </div>
         </div>
         <div className="flex flex-col lg:flex-row bg-green-100 rounded-l-full p-4 m-3 justify-evenly">

  <div className="lg:w-[50%] h-auto lg:flex-row justify-center pt-4 lg:pt-28 items-center">
    <h1 className="text-2xl lg:text-4xl font-bold underline p-4 text-center">Irrigation</h1>
    <p className="text-xl lg:text-2xl">Aqua Water is committed to providing sustainable irrigation solutions that help farmers and businesses conserve water and protect the environment. The company's irrigation services are designed to improve water efficiency and reduce water waste. Aqua Water is also a leader in the development of innovative irrigation technologies, such as drip irrigation and smart irrigation systems.</p>
  </div>

  <div className="lg:w-[50%] mt-4 lg:mt-0">
    <img className="w-full h-auto lg:w-[500px] lg:h-[500px] rounded-full relative" src={onSet ? Irrigation : Irrigation2} onMouseEnter={handMouse} onMouseLeave={handMouseOff} alt="johhnnt" />
  </div>

</div>

       </div>
     )
   }
   
   export default Services