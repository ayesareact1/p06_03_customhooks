import React, { useState } from 'react'
import { useSearch } from '../hooks/useSearch';

export default function DashboardVendors() {

  const [term, setTerm] = useState('');
  const {data, isLoading} = useSearch(term, 'vendor');


  const handleSearchVendor = e => {
    setTerm(e.target.value);
  }

  return (
      <div className="row">
        <div className="col-100">
          <input type="text" onChange={handleSearchVendor}/>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>CIF</th>
                <th>Localidad</th>
              </tr>
            </thead>
            <tbody>
              { isLoading ?
                <tr><td colSpan={3}>Cargando datos...</td></tr>
                :
                data.map(vendor => {
                  return (
                    <tr key={vendor.cif}>
                      <td>{vendor.nombre}</td>
                      <td>{vendor.cif}</td>
                      <td>{vendor.localidad}</td>
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
