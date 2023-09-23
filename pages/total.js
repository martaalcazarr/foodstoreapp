import Layout from "../layout/Layout"
import { useEffect, useCallback } from "react"
import useStore from "../hooks/useStore"
import { formatMoney } from "../helpers"

export default function Total(){

    const {order, name, setName, putOrder, total} = useStore()

    const checkOrder = useCallback(() => {
        return order.length === 0 || name === '' || name.length < 2
    }, [order, name])

    useEffect(() => {
        checkOrder()
    }, [order, checkOrder])



    return(
        <Layout page='Total and confirm order'>
        <h1 className="text-4xl font-black">Total</h1>
        <p className="text-2xl my-10">Confirm your order</p>

        <form
            onSubmit={putOrder}
        >
        <div>
            <label
                htmlFor="name"
                className="block uppercase text-slate-800 font-bold text-xl">
                Name
            </label>

            <input
                id="name" 
                type="text"
                className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>

        <div className="mt-10">
            <p className="text-2xl">Total {''}
            <span className="font-bold">
                {formatMoney(total)}
            </span>
            </p>

        </div>

        <div className="mt-5">
            <input 
                type="submit"
                className={`${checkOrder() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} text-center w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white`}
                value="Confirm order"
                disabled={checkOrder()}
            />
        </div>
    </form>
    </Layout>

    
    )
}