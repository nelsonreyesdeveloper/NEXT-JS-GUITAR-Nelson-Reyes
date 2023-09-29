
import Guitarraurl from "@/components/guitarraurl";
import { getGuitarra } from "@/data/getGuitarras";
import NotFound from "./not-found";

export async function generateMetadata({ params, searchParams }, parent) {
    try {
        const guitarra = await getGuitarra(params.slug);

        return {
            title: `Guitar SM | ${guitarra[0].attributes.nombre}`,
            description: guitarra[0].attributes.descripcion,
        }

    } catch (error) {
        console.log(error)
    }

}


const Guitarra = async ({ params: { slug } }) => {
    const data = await getGuitarra(slug);
   

    return (
        <div className='flex flex-col-reverse sm:flex-row mt-10 sm:items-start gap-x-5 my-10'>

            {
                data.length !== 0 ? (
                    <Guitarraurl data={data} />
                ) : (
                    <NotFound />
                )
            }

        </div>
    )
}

export default Guitarra