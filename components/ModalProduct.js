import { useState } from "react"
import Image from "next/image"
import useStore from "../hooks/useStore"
import { formatMoney } from "../helpers"

const ModalProduct = () => {

    const {product, handleChangeModal} = useStore()
    const [quantity, setQuantity] = useState(1)


  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <Image
                width={300}
                height={400}
                alt={`image of ${product.name}`}
                src={`/assets/img/${product.image}.jpg`}
                />
        </div>

        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button
                    onClick={handleChangeModal}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <h1 className="text-xl font-bold mt-5">
                {product.name}
            </h1>
            <p className="mt-5 font-black text-5xl text-amber-500">
                {formatMoney(product.price)}
            </p>

            <div className="flex gap-4 mt-5">
                <button
                    type="button"
                    onClick={() => {
                        if(quantity <= 1 ) return
                        setQuantity(quantity - 1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>


                </button>

                <p className="text-3xl ">{quantity}</p>    
                <button
                    type="button"
                    onClick={() => {
                        if(quantity >= 30) return
                        setQuantity(quantity + 1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>
            </div>
        </div>
    </div>
    
  )
}

export default ModalProduct