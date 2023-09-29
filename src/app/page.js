import Guitarra from '@/components/guitarra';
import Post from '@/components/post';
import { getPosts } from '@/data/getBlogs';
import { getCurso } from '@/data/getCurso';
import { getGuitarras } from '@/data/getGuitarras';
import Image from 'next/image'

export default async function Home() {
  const [posts, guitarras, curso] = await Promise.all([
    getPosts(),
    getGuitarras(),
    getCurso()
  ])

  console.log(posts);

  const postsTree = posts.slice(posts.length - 3);

  const guitarrasTree = guitarras.slice(guitarras.length - 3);

  const { titulo, imagen, contenido } = curso.attributes;
  return (
    <div className='w-[95%] lg:max-w-7xl mx-auto'>
      <h1 className="my-5 sm:my-10  text-center text-orange-500 text-5xl uppercase font-bold">INICIO</h1>
      <div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {
            postsTree.map((post) => (
              <Post key={post.id} post={post} />
            ))
          }
        </div>

        <main className=" relative min-h-full lg:h-auto my-10 ">
          <div className="relative top-0 lg:top-1/4 left-0 w-full min-h-full lg:h-96 py-5">
            <img className="bg-cover absolute top-0 left-0 w-full h-full  z-0" src={imagen.data[0].attributes.url} alt="" />
            <div className="bg-black opacity-80 absolute top-0 left-0 z-10 w-full h-full"></div>

            <div className="flex  relative top-0 lg:top-10  z-20 flex-col justify-end items-end  w-[95%] mx-auto min-h-min lg:h-auto">

              <p className="text-white z-20  text-base  sm:text-3xl font-black font-lato lg:w-[70%] w-full text-center lg:text-center">{titulo}</p>
              <div className="lg:w-[70%] z-20 lg:mt-5">
                <p className="text-normal sm:text-lg text-justify text-white font-light">{contenido}</p>

              </div>
            </div>
          </div>
        </main>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            guitarrasTree.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
