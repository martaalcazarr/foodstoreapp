import { useState, useEffect, createContext } from "react";
import axios from "axios";

const StoreContext = createContext()

const StoreProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    const [actualCategory, setActualCategory] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])

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
    }

    const handleSetProduct = product => {
        setProduct(product)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAddToOrder = ({categoryId, image, ...product}) => {
        if(order.some(productState => productState.id === product.id)){
            
            const updatedOrder = order.map(productState => productState.id === product.id ? product : productState )

            setOrder(updatedOrder)
        }else{
            setOrder([...order, product])
        }
        setModal(false)
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
                order
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