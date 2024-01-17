import Hero from "../Hero/Hero"
const Navbar = () => {
  const navItem = ["Home", "Services", "About", "Contact"]
  // const buttonItem = ["Sing In", "Sign Up"]
  return (
    <div className=" md:flex-row lg:sticky flex-wrap items-center h-auto p-4 w-[100%] flex-col bg-blue-200 bg-no-repeat bg-cover">
      <a className=" font-bold flex  items-center mb-4 text-font-style  md:m-0 md:pr-[500px] font-satisfy">
        Aqua Wave
      </a>
      <div className=" flex justify-center item-center text-base">
      {
  navItem.map((item: string, index) => {
    return (
      <a key={index} className="mr-5 hover:underline hover:text-lg">{ item}</a>
    )
  })
} </div>
     
      {/* <div className="flex items-center m-4  md:pl-[200px]  font-bold">
      {
buttonItem.map((button: string) => {
    return (
      <a className="mr-5">{ button}</a>
    )
  })
}
      </div> */}
<Hero/>
    </div>
  )
}

export default Navbar
