import Image from "next/image"

const Category = ({category}) => {

    const {name, icon, id} = category
  return (
    <div className="flex items-center gap-4 w-full border p-5 hover:bg-amber-400">
        <Image 
            width={100}
            height={100}
            src={`/assets/img/icon_${icon}.svg`}
            alt="icon"
        />

        <button
            type="button"
            className="text-2xl font-bold hover:cursor-pointer"
        >
            {name}
        </button>
    </div>
  )
}

export default Category