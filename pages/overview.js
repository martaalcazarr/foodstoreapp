import Layout from "../layout/Layout"
import useStore from "../hooks/useStore"
import ProductOverview from "../components/ProductOverview"

export default function Overview(){

    const {order} = useStore()

    return(
        <Layout page='Overview'>
            <h1 className="text-4xl font-black">Overview</h1>
            <p className="text-2xl my-10">Check your order</p>
            {order.length === 0 ? (
                <p className="text-center text-2xl">Your order is empty</p>
            ) : (
                order.map(product => (
                    <ProductOverview
                        key={product.id}
                        product={product}
                    />
                ))
            )}
        </Layout>
    )
}