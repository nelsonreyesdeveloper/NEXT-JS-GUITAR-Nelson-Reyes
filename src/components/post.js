'use client'

import { useRouter } from 'next/navigation'

import { formatearFecha } from "@/helpers/formatedate";


const Post = ({ post }) => {
    const { titulo, contenido, imagen, tag, createdAt } = post.attributes;
    const router = useRouter()
    return (
        <div className="mb-5">
            <div className="flex flex-col  items-center justify-center">

                <h2 className="text-3xl h-[72px] font-bold text-center">{titulo}</h2>
                <div className='w-full object-cover relative'>
                    <img className='w-full h-64 object-cover' src={imagen.data[0].attributes.formats.medium.url} alt="" />
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>

                    </div>
                </div>
                <p className="text-normal mb-2 font-bold text-orange-500 text-end block w-full my-5  "> <span className='underline underline-offset-4 decoration-2  py-3'>{formatearFecha(createdAt)}</span></p>
                <p className="text-lg font-normal line-clamp-4 mt-2">{contenido}</p>
                <button onClick={() => router.push(`/blog/${tag}`)} className="bg-black text-white py-2 px-10 font-semibold uppercase w-full">Ver blog</button>
            </div>
        </div>
    )
}

export default Post