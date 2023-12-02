import { Johnny, Irrigation, Water, Water2, Water1, Irrigation2 } from "../../assets/img";
import {useState} from "react"
const Services = () => {
  const [isFocus, setIsFocus] = useState(false)
  
  const handleFocus = ()=> {
setIsFocus(true)
  }
     return (
       <div className="bg-blue-200 h-full p-16">
         <div className="flex justify-evenly">
           <div className="w-[600px] h-[500px] flex-row  justify-center pt-28  items-center" >
             <h1 className="text-2xl font-bold underline p-4 text-center">Irrigation</h1>
             <p className="text-xl">           Aqua Water is committed to providing sustainable irrigation solutions that help farmers and businesses conserve water and protect the environment. The company's irrigation services are designed to improve water efficiency and reduce water waste. Aqua Water is also a leader in the development of innovative irrigation technologies, such as drip irrigation and smart irrigation systems.
</p>
           </div>
           <div>
             <img className=" w-[500px] h-[500px] rounded-2xl relative" src={isFocus ? Johnny : Water1} alt="johhnnt" onClick={handleFocus}   />
           </div>
         </div>
         <div className="flex justify-evenly">
         <div>
           <img className=" w-[500px] h-[500px] rounded-2xl  relative"  src={Irrigation}  alt="johhnnt"/>
           </div>
           <div className="w-[600px] h-auto flex-row  justify-center pt-28  items-center" >
             <h1 className="text-2xl font-bold underline p-4 text-center ">Irrigation</h1>
             <p className="text-xl">           Aqua Water is committed to providing sustainable irrigation solutions that help farmers and businesses conserve water and protect the environment. The company's irrigation services are designed to improve water efficiency and reduce water waste. Aqua Water is also a leader in the development of innovative irrigation technologies, such as drip irrigation and smart irrigation systems.
</p>
           </div>
         </div>
         <div className="flex justify-evenly">
         <div className="w-[600px] h-auto flex-row justify-center pt-28  items-center" >
             <h1 className="text-2xl font-bold underline p-4 text-center">Irrigation</h1>
             <p className="text-xl">           Aqua Water is committed to providing sustainable irrigation solutions that help farmers and businesses conserve water and protect the environment. The company's irrigation services are designed to improve water efficiency and reduce water waste. Aqua Water is also a leader in the development of innovative irrigation technologies, such as drip irrigation and smart irrigation systems.
</p>
           </div>
           <div>
           <img className=" w-[500px] h-[500px] rounded-2xl"  src={Water}  alt="johhnnt"/>
           </div>
         </div>
       </div>
     )
   }
   
   export default Services