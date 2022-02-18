import { useState } from "react";

function PatientData() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [birthDate, setbirthDate] = useState("00/00/0000")
  const [address, setAddress] = useState("")
  return (
    <div>
      <div>
        <h1>Dicas de Tratamento para covid-19</h1>
      </div>
      <div>
        <div>
          <h2>Insira seus Dados</h2>
        </div>
        <div>
          <p>Nome completo: {name}</p>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <p>Idade: {age}</p>
          <input type="number" onChange={(e) => setAge(parseInt(e.target.value))}/>
        </div>
        <div>
          <p>Data de nascimento: {birthDate}</p>
          <input type="text" onChange={(e) => setbirthDate(e.target.value)}/>
        </div>
        <div>
          <p>Endereço: {address}</p>
          <input type="text" onChange={(e) => setAddress(e.target.value)}/>
        </div>
      </div>
    </div>
  )
}

export default PatientData;
