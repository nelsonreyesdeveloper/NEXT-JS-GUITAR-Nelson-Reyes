import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h2>Lo sentimos esta pagina no existe</h2>
            <p>No se encontro el recurso</p>
            <Link className='text-center underline block' href="/">Regresar al inicio</Link>
        </div>
    )
}