
const Navbar = () => {
  const navItem = ["Home", "Services", "About", "Contact"]
  const buttonItem = ["Sing In", "Sign Up"]
  return (
    <div className=" md:flex-row sticky top-0  container flex  flex-wrap items-center p-4 bg-gray-100 mx-auto w-[100%] flex-col">
      <a className=" font-bold flex  items-center mb-4 text-font-style  md:m-0 md:pr-[500px] font-satisfy">
        Aqua Wave
      </a>
      <div className=" flex justify-center item-center text-base">
      {
  navItem.map((item: string) => {
    return (
      <a className="mr-5">{ item}</a>
    )
  })
} </div>
     
      <div className="flex items-center m-4  md:pl-[200px]  font-bold">
      {
buttonItem.map((button: string) => {
    return (
      <a className="mr-5">{ button}</a>
    )
  })
}
      </div>
    </div>
  )
}

export default Navbar
