import { man, laura, medium, side, top, young } from "../../assets/img";



const ImgArr = [  laura, medium, side, young, top, man]
const Gallery = () => {
  return (
<div className='grid grid-rows-3 md:grid-rows-2 m-4 grid-flow-col auto-cols-fr bg-gray-300'>
       {ImgArr.map((image, index) => (
        <div key={index} className="m-4">
          <img src={image} alt={`Image ${index + 1}`} className=" w-auto md:h-[400px] h-48 mx-auto content-center" loading="lazy"  />
        </div>
      ))}
      </div>    
  )
}

export default Gallery