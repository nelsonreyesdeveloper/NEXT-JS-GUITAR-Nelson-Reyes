'use client'
import GuitarraCarrito from "@/components/guitarracarrito"
import { useCarritoContext } from "../context/carritocontext"

const Cart = () => {
    const { carrito, total } = useCarritoContext()

    return (
        <div className="flex flex-col lg:flex-row my-10 gap-x-20">
            <div className="basis-1/3">
                <h2 className="text-center font-bold text-3xl uppercase " >Resumen</h2>

                {
                    carrito?.length === 0 ? (
                        <p className="text-center">Carrito vacio</p>
                    ) :

                        carrito?.map((guitarra) => (
                            <GuitarraCarrito key={guitarra.id} guitarra={guitarra} />
                        ))
                }

            </div>
            <div className="basis-2/3 ">

                <div className="p-4 bg-gray-200 rounded-md">
                    <h2 className="text-center font-bold text-3xl  uppercase">{carrito?.length == 0 ? "No haz agregado nada a tu carrito" : `Total A Pagar: ${total}`}</h2>

                </div>

            </div>
        </div>
    )


}

export default Cart