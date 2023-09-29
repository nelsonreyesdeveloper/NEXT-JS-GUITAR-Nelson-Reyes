'use client'
import { createContext, useState, useEffect, useContext } from "react"

const CarritoContext = createContext();
export const useCarritoContext = () => {
    const values = useContext(CarritoContext);
    if (!values) throw new Error('valores no encontrados')
    return values
}

export const CarritoProvider = ({ children }) => {
    const localSt = JSON.parse(localStorage.getItem('carrito')) || [];
    const [carrito, setCarrito] = useState(localSt);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        /* TOTAL DE PRODUCTOS */
        localStorage.setItem('carrito', JSON.stringify(carrito))
        const total = carrito.reduce((acc, guitarra) => acc + guitarra.cantidad * guitarra.precio, 0)
        setTotal(total)
    }, [carrito])

    const añarCarrito = (guitarra) => {
        /* Comprobar si una guitarra ya esta en el carrito */
        if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
            const carritoActualizado = carrito.map(guitarraState => guitarraState.id === guitarra.id ? guitarra : guitarraState)
            setCarrito(carritoActualizado)

        } else {
            setCarrito([...carrito, guitarra])
        }
    }

    const handleCantidad = (id, cantidad) => {
        const carritoActualizado = carrito.map((guitarra) => guitarra.id === id ? { ...guitarra, cantidad } : guitarra)
        setCarrito(carritoActualizado)
    }
    const handleDelete = (id) => {
        const carritoActualizado = carrito.filter((guitarra) => guitarra.id !== id)
        setCarrito(carritoActualizado)
    }




    return <CarritoContext.Provider value={{ añarCarrito,total,carrito,handleDelete,handleCantidad }}>{children}</CarritoContext.Provider>
}