
export function currencyFormat (quantity: number){
    return new Intl.NumberFormat('es-AR',{
        style: 'currency',
        currency: 'ARS'
    }).format(quantity)
}

export function dateFormat(isoString: string) {
    const date = new Date(isoString)
    return new Intl.DateTimeFormat('es-Es',{
        month: 'long',
        year: 'numeric',
        day: 'numeric'
    }).format(date)
}