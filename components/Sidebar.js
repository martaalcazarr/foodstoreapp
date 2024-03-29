import Image from "next/image"
import useStore from "../hooks/useStore"
import Category from "./Category"

const Sidebar = () => {

  const {categories} = useStore()

  return (
    <>
        <Image 
            width={300} 
            height={100} 
            src="/assets/img/logo.svg"  
            alt="image logo"/>

        <nav className="mt-10">
          {categories.map(category =>(
            <Category 
              key={category.id}
              category={category}
            />
        ))}
        </nav>
    </>
  )
}

export default Sidebar