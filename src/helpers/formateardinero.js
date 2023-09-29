export const formatearDinero = (dinero) => {
    /* redondear a dos decimales */
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(dinero)
} 