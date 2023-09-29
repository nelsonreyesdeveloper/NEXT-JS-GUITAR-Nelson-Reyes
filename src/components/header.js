'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Header = () => {

    const pathname = usePathname()


    return (
        <header className="py-10 bg-[url('/img/header.jpg')] bg-cover bg-no-repeat bg-center h-full w-full relative ">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0">

            </div>
            <div className="w-[95%] lg:max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center ">
                <div className="z-10 ">
                    <Link href="/">
                        <img className="w-full h-40 " src="/img/logo.svg" alt="Logo" />
                    </Link>
                </div>
                <nav className="flex flex-col items-center text-center mt-5 lg:mt-0 lg:flex-row gap-x-4 text-gray-200   z-10  ">
                    <Link href={"/"} className={`hover:bg-orange-500 ${pathname === "/" ? "text-white bg-orange-500" : ""}  p-1 rounded-md uppercase font-lato  font-black sm:px-4 mb-2 lg:mb-0 transition-all duration-300   hover:text-white   list-none`}>Home</Link>
                    <Link href={"/nosotros"} className={`hover:bg-orange-500 ${pathname === "/nosotros" ? "text-white bg-orange-500" : ""} p-1 rounded-md uppercase font-lato  font-black sm:px-4 mb-2 lg:mb-0 transition-all duration-300 hover:text-white   list-none`}>Nosotros</Link>
                    <Link href={"/tienda"} className={`hover:bg-orange-500 ${pathname === "/tienda" ? "text-white bg-orange-500" : ""} p-1 rounded-md uppercase font-lato  font-black sm:px-4 mb-2 lg:mb-0 transition-all duration-300 hover:text-white   list-none`}>Tienda</Link>
                    <Link href={"/blog"} className={`hover:bg-orange-500 ${pathname === "/blog" ? "text-white bg-orange-500" : ""} p-1 rounded-md uppercase font-lato  font-black sm:px-4 mb-2 lg:mb-0 transition-all duration-300 hover:text-white   list-none`}>Blog</Link>
                    {/* <Link href={"/contact"} className={`hover:bg-orange-500 ${pathname === "/contact" ? "text-white bg-orange-500" : ""} p-1 rounded-md uppercase font-lato  font-black sm:px-4 mb-2 lg:mb-0 transition-all duration-300 hover:text-white   list-none`}>Contacto</Link> */}
                    <Link href={"/cart"}>
                        <div className={`p-1 rounded-md hover:bg-orange-500 ${pathname === "/cart" ? "text-white bg-orange-500" : ""} `}>
                            <svg className="w-10 h-10   " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#ffffff"></path> </g></svg>

                        </div>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
