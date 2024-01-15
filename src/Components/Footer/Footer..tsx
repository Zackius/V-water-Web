const Footer = () => {

    return (
      <div className='border-t-2 bg-blue-100 text-black'>
        <div className='contain mx-auto'>
        <div className='flex flex-col md:flex-row  justify-center gap-2 sm:flex-col-1'>

          <div>
            <p className='text-xl font-light'>Got any enquiry? Give us a call</p>
            <p className='text-xl  text-center  p-4 font-semibold'>+254 717 000 778</p>
          </div>
          <div> 
  
          </div>
          <div className='flex flex-col sm:text-sm  md:text-md'>
            <p className='text-2xl font-semibold'>Social Account</p>
            <div className='flex justify-evenly text-4xl'>
              {/* <Link to={'/'}>
                <AiOutlineFacebook/>
              </Link>
              <Link to={'/'}>
              <AiOutlineTwitter/>
              </Link>
              <Link to={'/'}>
              <AiOutlineInstagram/>
              </Link> */}
              {/* <Link to={'/'}>Home</Link> */}
            </div>
          
          </div>
        </div>
        </div>
        <div className='flexl text-center pt-4'>
        <div className=" flex  justify-center">
            {/* <AiOutlineCopyrightCircle size={20} /> */}
          <p >
            Aqua Water
          </p>
          </div>
          <div className=" flex  justify-center">
            {/* <AiOutlineCopyrightCircle size={20} /> */}
          <p >
       All Right Reserved
          </p>
        </div>
          <p className='text-md font-semibold md:text-sm te'>Privacy | Cookies Policy | Terms and Conditions</p>
        </div>
      </div>
    )
  }
  
  export default Footer