import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <>
      <div className="imc-container">
        <div className="imc-card">
          <h1>Calculadora de IMC</h1>
          <p>Descubra seu índice de Massa Corporal</p>
      

        <div className="imc-form">
          <input 
            type="number" 
            name='peso'
            placeholder='Peso Ex: 70'
          />

          <input 
            type="number" 
            name='altura' 
            placeholder='Altura Ex: 1.75'
          />

          <button>Calcular</button>

          <button>Limpar</button>


          </div>
          
          <div className='result-card'>
            <h1 className='valor-result'>26</h1>
            <p className='resposta-result'>Peso normal</p>
          </div>

          </div>
      </div> {/* imc-container */}
    </>
  )
}
