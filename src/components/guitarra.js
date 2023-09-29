'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link';  

const Guitarra = ({ guitarra }) => {
    const { nombre, descripcion, imagen, precio, url } = guitarra.attributes;

    const router = useRouter()

    return (
        <div className="mb-5">
            <div className="flex items-stretch">
                <div className="basis-1/2">
                    <img loading="lazy" className="h-80" src={imagen.data[0].attributes.formats.medium.url} alt={`Imagen de guitarra - ${nombre}`} />
                </div>

                <div className="basis-1/2">
                    <h2 className="text-3xl font-bold text-center">{nombre}</h2>

                    <p className="text-lg font-normal flex-grow">{descripcion}</p>
                    <p className="text-5xl mb-2 font-black text-orange-500 text-center ">${precio}</p>
                    <Link
                        className='bg-black text-white py-2 px-10 font-semibold uppercase w-full'
                        href={`/tienda/${url}`}
                    >
                        Ver más
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Guitarra