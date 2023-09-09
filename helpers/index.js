export const formatMoney = quantity => {
    return quantity.toLocaleString('es-CL', {
        style: 'currency',
        currency: "CLP"
    })
}