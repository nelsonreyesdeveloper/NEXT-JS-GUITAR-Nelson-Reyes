'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const Footer = () => {

    const pathname = usePathname()
    return (
        <footer className="py-10 bg-black h-full w-full relative ">
            <div className="w-[95%] lg:max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center ">
                <nav className="flex flex-col text-center mt-5 lg:mt-0 lg:flex-row gap-x-4 text-gray-200   z-10  ">
                    <Link href={"/"} className={` p-1 ${pathname === "/" ? "text-orange-500 " : ""} rounded-md uppercase font-lato  font-black sm:px-4 mb-2 lg:mb-0 transition-all duration-100   hover:text-white   list-none`}>Home</Link>
                    <Link href={"/nosotros"} className={`   p-1 ${pathname === "/nosotros" ? "text-orange-500 " : ""} rounded-md uppercase font-lato  font-black sm:px-4 mb-2 lg:mb-0 transition-all duration-100 hover:text-white   list-none`}>Nosotros</Link>
                    <Link href={"/tienda"} className={`  p-1 ${pathname === "/tienda" ? "text-orange-500 " : ""} rounded-md uppercase font-lato  font-black sm:px-4 mb-2 lg:mb-0 transition-all duration-100 hover:text-white   list-none`}>Tienda</Link>
                    <Link href={"/blog"} className={`  p-1 ${pathname === "/blog" ? "text-orange-500 " : ""} rounded-md uppercase font-lato  font-black sm:px-4 mb-2 lg:mb-0 transition-all duration-100 hover:text-white   list-none`}>Blog</Link>
                    {/* <Link href={"/contact"} className={` p-1 ${pathname === "/contact" ? "text-orange-500 " : ""} rounded-md uppercase font-lato  font-black sm:px-4 mb-2 lg:mb-0 transition-all duration-100 hover:text-white   list-none`}>Contacto</Link> */}
                </nav>
                <div className="z-10 ">
                    <p className="text-white font-lato uppercase font-black ">Todos los derechos reservados <span className="text-orange-500 font-black">{new Date().getFullYear()}</span>  </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
