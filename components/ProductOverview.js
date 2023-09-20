import Image from "next/image"
import { formatMoney } from "../helpers"

const ProductOverview = ({product}) => {
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
        <div className="md:w-1/6">
            <Image
                width={300}
                height={400}
                alt={`Image of ${product.name}`}
                src={`/assets/img/${product.image}.jpg`}
            />
        </div>

        <div className="md:w-5/6">
            <p className="text-3xl font-bold">{product.name}</p>
            <p className="text-xl font-bold mt-2">Quantity: {product.quantity}</p>
            <p className="text-xl font-bold mt-2">Price: <span className=" text-amber-500">{formatMoney(product.price)}</span></p>
            <p className="text-xl font-bold mt-2">Subtotal: <span className=" text-amber-500">{formatMoney(product.price * product.quantity)}</span></p>
        </div>
    </div>
  )
}

export default ProductOverview