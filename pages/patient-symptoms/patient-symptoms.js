import { useState } from "react"

function PatientSymptoms() {
  const [symptoms, setSymptoms] = useState(0)

  function selectSymptoms(e, gravity) {
    console.log(symptoms)
    if (e.target.checked) {
      setSymptoms(symptoms + gravity)
    } else (
      setSymptoms(symptoms - gravity)
    )
  }

  function symptomPrescription() {
    if (symptoms <= 3 && symptoms >= 1) {
      alert("Descançe e bebas bastante água")
    } else if (symptoms >= 3 && symptoms <= 6) {
      alert("Descançe e se persistirem os sintomas va imediatamente ao medico")
    } else if (symptoms > 7) {
      alert("Va imediatamente ao medico")
    }
  }

  return (
    <div>
      <div>
        <h2>Selecione os sintomas que está sentindo</h2>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td><p>Sintomas mais comuns:</p></td>
              <td>
                <input type="checkbox" onChange={(e) => selectSymptoms(e, 1)}/>
                <p>febre</p>
              </td>
              <td>
                <input type="checkbox" onChange={(e) => selectSymptoms(e, 1)}/>
                <p>tosse</p>
              </td>
              <td>
                <input type="checkbox" onChange={(e) => selectSymptoms(e, 1)}/>
                <p>cansaço</p>
              </td>
            </tr>
            <tr>
              <td><p>Sintomas menos comuns:</p></td>
              <td>
                <input type="checkbox" onChange={(e) => selectSymptoms(e, 5)}/>
                <p>dores de garganta</p>
              </td>
              <td>
                <input type="checkbox" onChange={(e) => selectSymptoms(e, 5)}/>
                <p>dor de cabeça</p>
              </td>
              <td>
                <input type="checkbox" onChange={(e) => selectSymptoms(e, 5)}/>
                <p>tensão e dores musculares</p>
              </td>
            </tr>
            <tr>
              <td><p>Sintomas graves:</p></td>
              <td>
                <input type="checkbox" onChange={(e) => selectSymptoms(e, 7)}/>
                <p>dificuldade respiratória ou falta de ar</p>
              </td>
              <td>
                <input type="checkbox" onChange={(e) => selectSymptoms(e, 7)}/>
                <p>perda da fala ou capacidade motora, ou confusão</p>
              </td>
              <td>
                <input type="checkbox" onChange={(e) => selectSymptoms(e, 7)}/>
                <p>dor no peito</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={() => symptomPrescription()}>Exibir resultado</button>
      </div>
    </div>
  )
}

export default PatientSymptoms;
