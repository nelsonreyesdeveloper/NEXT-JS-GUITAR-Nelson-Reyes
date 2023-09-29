'use client'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import React from 'react'
import { useCarritoContext } from '@/app/context/carritocontext'

const Guitarraurl = ({ data }) => {
    if (data.length === 0) {
        notFound()
        return;
    }

    const { añarCarrito } = useCarritoContext();
    const { nombre, descripcion, imagen, precio, url } = data[0]?.attributes;
    const [cantidad, setCantidad] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cantidad <= 0) {

            alert('La cantidad debe ser mayor a 0')
            return
        }

        const guitarra = {
            id: data[0].id,
            nombre,
            cantidad,
            precio,
            imagen: imagen.data[0].attributes.url
        }

        añarCarrito(guitarra);
    }
    return (

        <>
            <div >
                <img loading='lazy' src={imagen.data[0].attributes.url} className='min-h-[250px] min-w-[100px]' alt={`Imagen de guitarra - ${nombre}`} />
            </div>
            <div>
                <h2 className='text-6xl text-center font-bold text-orange-500 uppercase'>{nombre}</h2>
                <p className='mt-10 text-justify'>{descripcion}</p>
                <p className='mt-10 text-5xl mb-2 font-black text-orange-500 text-center '><span className='text-black'>Precio: </span>${precio}</p>
                <form onSubmit={handleSubmit} className='mt-10' id="form-pedido" >

                    <div className='flex justify-center flex-col'>
                        <label htmlFor="cantidad" className='block font-bold'>Cantidad</label>
                        <select onChange={(e) => setCantidad(e.target.value)} className='block py-4 px-2 text-center font-bold' id='cantidad'  >
                            <option value="0"  >--Seleccionar--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className='lg:max-w-max'>
                        <button type='submit' className='bg-orange-500 text-white mt-5 py-2 px-10 font-semibold uppercase w-full'>Confirmar Pedido</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Guitarraurl

