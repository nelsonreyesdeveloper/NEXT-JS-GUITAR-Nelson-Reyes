'use client'
import { useCarritoContext } from "@/app/context/carritocontext";


const GuitarraCarrito = ({ guitarra }) => {
    const { nombre, cantidad, imagen, precio, id } = guitarra;

    const { handleDelete, handleCantidad } = useCarritoContext()

    return (
        <div className="my-5 border-b border-gray-200">
            <div className="flex flex-col items-stretch">
                <div className="flex justify-end mb-4">
                    <svg onClick={() => {
                        handleDelete(id)
                    }} className="h-10 w-10  transition duration-150 ease-out hover:ease-in hover:cursor-pointer" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="#000000" ></path> <path d="M3 3.32001L21 21.32" stroke="#000000" ></path> </g></svg>
                </div>
                <div className="flex gap-x-10 ">

                    <div>
                        <h2 className="text-3xl font-bold text-center">{nombre}</h2>
                        <img loading="lazy" className="h-80" src={imagen} alt={`Imagen de guitarra - ${nombre}`} />
                    </div>

                    <div className="">
                        <label className="text-lg font-bold uppercase font-lato">CANTIDAD:</label>
                        <select value={cantidad} onChange={(e) => handleCantidad(id, Number(e.target.value))} className="bg-gray-200 p-2 w-full mb-2">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        {/* <p className="text-lg flex-grow font-bold font-lato">CANTIDAD: <span className="font-normal">{cantidad}</span> </p> */}
                        <p className="text-lg flex-grow font-bold uppercase font-lato ">Precio Unitario: <span className="font-normal">${precio}</span> </p>
                        <p className="text-lg flex-grow font-bold uppercase font-lato ">SUBTOTAL: <span className="font-black font-lato text-xl">${precio * cantidad}</span> </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default GuitarraCarrito