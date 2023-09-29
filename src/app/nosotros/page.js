import Image from 'next/image'


export const metadata = {
    title: 'Guitar SM | Nosotros',
    description: 'Informacion sobre guitarras, ventas y servicio de reparacion',
}


const Nosotros = () => {
    return (
        <main>
            <h2 className="my-5 sm:my-10  text-center text-orange-500 text-5xl uppercase font-bold">Nosotros</h2>
            <div className="flex flex-col md:flex-row md:gap-x-6">
                <Image width={1000} height={1000} src="/img/nosotros.jpg" className="basis-1/2 h-96 object-cover w-full mb-5 lg:mb-10" alt="Nosotros Imagen" />
                <div className="basis-1/2">
                    <p className="mb-3 sm:mb-5  font-semibold text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a laboriosam porro culpa. Quisquam dolorem aliquid placeat voluptatibus at blanditiis repellendus aliquam aspernatur, alias soluta nemo porro natus doloremque id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, tempore! Itaque error aperiam inventore et dolorum sed iste explicabo distinctio laborum iure? Eveniet nostrum, error illo qui ut corporis quasi!</p>
                    <p className="mb-3 sm:mb-5 font-semibold text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a laboriosam porro culpa. Quisquam dolorem aliquid placeat voluptatibus at blanditiis repellendus aliquam aspernatur, alias soluta nemo porro natus doloremque id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, tempore! Itaque error aperiam inventore et dolorum sed iste explicabo distinctio laborum iure? Eveniet nostrum, error illo qui ut corporis quasi!</p>
                </div>

            </div>
        </main>
    )
}

export default Nosotros 