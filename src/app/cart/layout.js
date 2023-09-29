import React from 'react'
export const metadata = {
    title: 'Guitar SM | Tienda',
    description: 'Informacion sobre guitarras, ventas y servicio de reparacion',
}

const Cartlayout = ({ children }) => {
    return (
        <div className="w-[95%] mx-auto lg:max-w-7xl lg:mx-auto">
            {children}
        </div>

    )
}

export default Cartlayout