const products = [
    {sku: 'A1', nombre: 'iphone', marca: 'Apple', precio: 600},
    {sku: 'A2', nombre: 'itelefono', marca: 'Nisu', precio: 100},
    {sku: 'X1', nombre: 'redmi', marca: 'Xiaomi', precio: 150},
    {sku: 'S1', nombre: 'galaxy', marca: 'Samsung', precio: 300},
]

export function findProducts(term) {
    let productsFounded = [];
    if (term !== '') { 
        const pattern = new RegExp("^" + term.toLowerCase()); // Todos los que comiencen por el término
        productsFounded = products.filter(product => pattern.test(product.nombre)); // checkea el nombre con el patrón
    }
    return productsFounded;
    // return products.filter(product => product.nombre.toLowerCase().startsWith(term.toLowerCase()));
}