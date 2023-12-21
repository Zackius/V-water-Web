import { man, laura, medium, side, top, young } from "../../assets/img";



const ImgArr = [  laura, medium, side, young, top, man]
const Gallery = () => {
  return (
<div className='grid grid-rows-2 grid-flow-col auto-cols-fr bg-gray-300'>
       {ImgArr.map((image, index) => (
        <div key={index} className="m-4">
          <img src={image} alt={`Image ${index + 1}`} className="w-auto h-[400px]" loading="lazy"  />
        </div>
      ))}
      </div>    
  )
}

export default Gallery