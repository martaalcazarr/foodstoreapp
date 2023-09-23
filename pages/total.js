import Layout from "../layout/Layout"

export default function Total(){
    return(
        <Layout page='Total and confirm order'>
        <h1 className="text-4xl font-black">Total</h1>
        <p className="text-2xl my-10">Confirm your order</p>

        <form>
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
            />
        </div>

        <div className="mt-10">
            <p className="text-2xl">Total {''}
            <span className="font-bold">
                300
            </span>
            </p>

        </div>

        <div className="mt-5">
            <input 
                className="text-center w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white bg-indigo-600"
                value="Confirm order"
            />
        </div>
    </form>
    </Layout>

    
    )
}