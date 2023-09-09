import Image from "next/image"
import { formatMoney } from "../helpers"

const Product = ({product}) => {

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
        </div>
    </div>
  )
}

export default Product