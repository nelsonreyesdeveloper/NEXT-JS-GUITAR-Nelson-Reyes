import { getPost } from '@/data/getBlogs'
import { formatearFecha } from '@/helpers/formatedate';

export async function generateMetadata({ params, searchParams }, parent) {

    // fetch data
    const post = await getPost(params.tag);


    return {
        title: `Guitar SM | ${post[0].attributes.titulo}`,
        description: post[0].attributes.contenido,
    }

}


const Post = async ({ params: { tag } }) => {
    const data = await getPost(tag);

    const { titulo, contenido, imagen, tag: tag2, createdAt } = data[0].attributes;

    return (

        <div className='my-6 lg:max-w-5xl mx-auto '>

            <div className='flex flex-col gap-x-4 '>
                <div className="basis-1/2 mb-6 relative">
                    {
                        imagen ? (
                            <>
                                <img className='h-96 object-cover w-full' loading='lazy' src={imagen.data[0].attributes.url} alt={`Imagen de guitarra - ${titulo}`} />
                                <div className='absolute top-0 left-0 z-0 w-full h-full bg-black opacity-90'>

                                </div>
                                <p className='text-white text-xl  sm:text-5xl z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold whitespace-nowrap opacity-100'>{titulo}</p>
                            </>
                        ) : ""
                    }

                </div>
                <div className='basis-1/2'>
                    <h2 className='text-3xl  text-center font-bold text-black uppercase '>{titulo}</h2>
                    <p className='text-start my-3 text-orange-500'><span className='underline underline-offset-4 decoration-2  py-3'>{formatearFecha(createdAt)}</span></p>
                    <p className='text-justify '>{contenido}</p>

                </div>
            </div>
        </div >
    )
}

export default Post