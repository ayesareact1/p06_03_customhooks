import React, { useState } from 'react'
import { useSearch } from '../hooks/useSearch';

export default function DashboardProducts() {

  const [term, setTerm] = useState('');
  const {data, isLoading} = useSearch(term, 'product');


  const handleSearchProduct = e => {
    setTerm(e.target.value);
  }

  return (
      <div className="row">
        <div className="col-100">
          <input type="text" onChange={handleSearchProduct}/>
          <table>
            <thead>
              <tr>
                <th>Árticulo</th>
                <th>Marca</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              { isLoading ?
                <tr><td colSpan={3}>Cargando datos...</td></tr>
                :
                data.map(product => {
                  return (
                    <tr key={product.sku}>
                      <td>{product.nombre}</td>
                      <td>{product.marca}</td>
                      <td>{product.precio}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
  )
}
