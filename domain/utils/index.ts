
export function currencyFormat (quantity: number){
    return new Intl.NumberFormat('es-AR',{
        style: 'currency',
        currency: 'ARS'
    }).format(quantity)
}

/* export function dateFormat(isoString: string) {
    const date = new Date(isoString)
    return new Intl.DateTimeFormat('es-Es',{
        month: 'long',
        year: 'numeric',
        day: 'numeric'
    }).format(date)
} */

type DateFormatOptions = {
    separator?: string
    format?: 'DD/MM/YYYY' | 'MM/DD/YYYY'
}

export function dateFormat(
    isoString: string,
    options: DateFormatOptions = {}
) {
    const { separator = '/', format = 'DD/MM/YYYY' } = options
    const date = new Date(isoString)

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    if (format === 'MM/DD/YYYY') {
        return [month, day, year].join(separator)
    }
    // Por defecto DD/MM/YYYY
    return [day, month, year].join(separator)
}