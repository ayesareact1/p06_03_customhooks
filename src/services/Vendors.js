const vendors = [
    {nombre: 'iberdrola', cif: 'A12345678', localidad: 'Bilbao'},
    {nombre: 'iberdrola Gas', cif: 'A76876866', localidad: 'Bilbao'},
    {nombre: 'jazztel', cif: 'A87654321', localidad: 'Madrid'},
    {nombre: 'Telefónica', cif: 'A4444444', localidad: 'Barcelona'},
]

export function findVendors(term) {
    let vendorsFounded = [];
    if (term !== '') { 
        const pattern = new RegExp("^" + term.toLowerCase()); // Todos los que comiencen por el término
        vendorsFounded =vendors.filter(vendor => pattern.test(vendor.nombre)); // checkea el nombre con el patrón
    }
    return vendorsFounded;
    // return products.filter(product => product.nombre.toLowerCase().startsWith(term.toLowerCase()));
}