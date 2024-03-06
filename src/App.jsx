import { useState } from 'react';
import './App.css';
import { FaSearchLocation } from "react-icons/fa";
import api from './services/api';

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState("");

  async function handleSearch() {
    try {
      if (input === "") {
        alert("Preencha algum CEP!");
        return;
      }

      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");

     
    } catch (error) {
      alert("Erro ao buscar");
      
    }
  }

  return (
    <div className='container'>
      <h1 className='title'>Buscador CEP</h1>
      <div className='containerInput' >
        <input type="text" placeholder="Digite seu CEP..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='buttonSearch' onClick={handleSearch}>
          <FaSearchLocation size={25} color='#ffff'/>
        </button>
      </div>
      {Object.keys(cep).length >0 && (
        <main className='main'>
                <h2>CEP:{cep.cep}</h2>

                <span>Rua: {cep.logradouro}</span>
                <span>Bairro: {cep.bairro}</span>
                <span>Cidade: {cep.localidade}</span>
                <span>Estado: {cep.uf}</span>
                <span>DDD: {cep.ddd}</span>
              </main>
      )
      }
      
    </div>
  );
}

export default App;
