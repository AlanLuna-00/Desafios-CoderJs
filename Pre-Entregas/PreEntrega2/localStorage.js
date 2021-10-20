let lastStorageId = 0


let date = new Date()
let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()

let dateConstruct = (year, month, day) => {
    let dateResult = `${day}-${month}-${year}`
    return dateResult
}



class Product {

    static contadorProduct = lastStorageId

    constructor(name, price, quantity) {
        this.name = name
        this.price = Number(price)
        this.date = dateConstruct(year, month, day)
        this.id = ++Product.contadorProduct
        this.quantity = Number(quantity)

    }
}

// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i)
//     let dataLocalStorage = localStorage.getItem(key)
//     dataLocalStorage = JSON.parse(dataLocalStorage)
//     const {itemTitleLS, itemPriceLS} = dataLocalStorage
// }