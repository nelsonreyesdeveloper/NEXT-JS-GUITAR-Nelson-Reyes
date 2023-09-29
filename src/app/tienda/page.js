import Guitarra from "@/components/guitarra"
import { getGuitarras } from "@/data/getGuitarras"

export const metadata = {
    title: 'Guitar SM | Tienda',
    description: 'Informacion sobre guitarras, ventas y servicio de reparacion',
  }

const Store = async () => {
    const guitarras = await getGuitarras()
    return (

        <div>
            <h2 className="my-5 sm:my-10  text-center text-orange-500 text-5xl uppercase font-bold">Tienda</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    guitarras.map((guitarra) => (
                        <Guitarra key={guitarra.id} guitarra={guitarra} />
                    ))
                }
            </div>

        </div>
    )
}
export default Store
