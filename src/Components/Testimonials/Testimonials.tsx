import { useEffect, useState } from "react"
import { TestimonialsData } from "./data"

const Testimoniaals = () => {
  const [testimonails, setTestimonials] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonials((prevIndex) => (prevIndex + 1) % TestimonialsData.length);
    }, 10000);
  
    return () => clearInterval(interval);
  }, []);

  
  return (
    <div className=" font-quick h-auto">
      <div className="text-center font-bold md:text-2xl underline">
        <h2>Client Testimonials</h2>
      </div>
    
      <div className="items-center h-auto m-auto p-8 w-[600px] grid grid-cols-1 divide-y divide-gray-500">
      {/* <p>
      <strong> Company's Name :</strong>  {TestimonialsData[testimonails].company}
        </p> */}
    <p className="p-4 text-center">
       <strong>~ </strong>{TestimonialsData[testimonails].name} <strong>~ </strong>
        </p>
        <p className="p-4 text-sm md:text-md">
        {TestimonialsData[testimonails].message}
        </p>

      </div>
       
    </div>
  )
}

export default Testimoniaals