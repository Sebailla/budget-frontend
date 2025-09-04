
export function currencyFormat (quantity: number){
    return new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
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