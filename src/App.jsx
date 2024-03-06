import { useState } from 'react';
import './App.css'
import { FaSearchLocation } from "react-icons/fa";


function App() {
  const [input,setInput] = useState()
  const handleSearch = ()=>alert("Teste" + input)

  return (
    <div className='container'>
      <h1 className='title'>Buscador CEP</h1>
      <div className='containerInput' >
        <input type="text" placeholder="Digite seu CEP..." 
          value={input}
          onChange={(e)=> setInput(e.target.value)}
        />
        <button className='buttonSearch' onClick={handleSearch}>
          <FaSearchLocation size={25} color='#ffff'/>
        </button>
      </div>
      <main className='main'>
        <h2>CEP: 59330000</h2>

        <span>Rua: Manoel Pereira da Cruz</span>
        <span>Bairro: Centro</span>
        <span>Cidade: Jucurutu</span>
        <span>Estdado: Rio Grande do Norte</span>
      </main>
    </div>
  )
}

export default App
