import { useState, useEffect, createContext } from "react";
import axios from "axios";

const StoreContext = createContext()

const StoreProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    const [actualCategory, setActualCategory] = useState({})

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

    return(
        <StoreContext.Provider
            value={{
                categories,
                actualCategory,
                handleClickCategory
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