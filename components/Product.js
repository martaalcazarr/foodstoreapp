import Image from "next/image"
import { formatMoney } from "../helpers"
import useStore from "../hooks/useStore"

const Product = ({product}) => {

    const {handleSetProduct, handleChangeModal} = useStore()

    const {name, image, price} = product
  return (
    <div className="border p-3">
        <Image 
            src={`/assets/img/${image}.jpg`} 
            alt={`Image of ${image}`}
            width={400}
            height={500}
        />
        <div className="p-5">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">
                {formatMoney(price)}
            </p>
            <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 text-white uppercase font-bold w-ful mt-5 p-3"
                onClick={() => {
                    handleChangeModal()
                    handleSetProduct(product)
                }}
            >
                Add to your order
            </button>
        </div>
    </div>
  )
}

export default Product