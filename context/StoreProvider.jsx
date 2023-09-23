import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast} from "react-toastify";
import { useRouter } from "next/router";

const StoreContext = createContext()

const StoreProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    const [actualCategory, setActualCategory] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])
    const [step, setStep] = useState(1)

    const router = useRouter()

    const getCategories = async () => {
        const {data} = await axios('/api/categories')
        setCategories(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() =>{
        setActualCategory(categories[0])
    }, [categories])

    const handleClickCategory = id => {
        const category = categories.filter(cat => cat.id === id)
        setActualCategory(category[0])
        router.push('/')
    }

    const handleSetProduct = product => {
        setProduct(product)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAddToOrder = ({categoryId, ...product}) => {
        if(order.some(productState => productState.id === product.id)){
            
            const updatedOrder = order.map(productState => productState.id === product.id ? product : productState )

            setOrder(updatedOrder)
            toast.success('Saved')
        }else{
            setOrder([...order, product])
            toast.success('Added to your order')
        }
        setModal(false)
    }

    const handleEditQuantity = id => {
        const updateProduct = order.filter(product => product.id === id)
        setProduct(updateProduct[0])

        setModal(!modal)
    }

    const handleDeleteProduct = id => {
        const updatedOrder = order.filter(product => product.id !== id)
        setOrder(updatedOrder)
    }

    return(
        <StoreContext.Provider
            value={{
                categories,
                actualCategory,
                handleClickCategory,
                product,
                handleSetProduct,
                modal,
                handleChangeModal,
                handleAddToOrder,
                order,
                handleEditQuantity,
                handleDeleteProduct
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}

export {
    StoreProvider
}

export default StoreContext