import Header from '@/components/header'
import './globals.css'
import Footer from '@/components/footer'
import { CarritoProvider } from './context/carritocontext'


export const metadata = {
  title: 'Guitar SM | Inicio',
  description: 'Informacion sobre guitarras, ventas y servicio de reparacion',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <CarritoProvider> {children}</CarritoProvider>

        <Footer />
      </body>
    </html>
  )
}
