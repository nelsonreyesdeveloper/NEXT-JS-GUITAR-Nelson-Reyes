import Post from "@/components/post"
import { getPosts } from "@/data/getBlogs"

export const metadata = {
    title: 'Guitar SM | Blog',
    description: 'Informacion sobre guitarras, ventas y servicio de reparacion',
}


const Blog = async () => {

    const posts = await getPosts()

    return (
        <div>
            <h2 className="my-5 sm:my-10  text-center text-orange-500 text-5xl uppercase font-bold">Blog</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {
                    posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))
                }
            </div>

        </div>
    )
}

export default Blog
