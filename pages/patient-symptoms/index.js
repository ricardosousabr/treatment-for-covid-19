import { useState } from "react"

function PatientSymptoms() {
  const [symptoms, setSymptoms] = useState(0)
  const [result, setResult] = useState("")
  const symptomResults = {
    moreCommon: "Descançe e beba bastante água, fique de quarentena em casa",
    lessCommon: "Fique em casa de quarentena e faça o teste de covid-19 o mais rapido possivel",
    graves: "Va imediatamente ao medico urgente",
  }

  function selectSymptoms(e, gravity) {
    if (e.target.checked) {
      setSymptoms(symptoms + gravity)
    } else (
      setSymptoms(symptoms - gravity)
    )
  }

  console.log(symptoms)

  function symptomPrescription() {
    if (symptoms <= 3 && symptoms >= 1) {
      setResult(symptomResults.moreCommon)
    } else if (symptoms >= 3 && symptoms <= 6) {
      setResult(symptomResults.lessCommon)
    } else if (symptoms >= 7) {
      setResult(symptomResults.graves)
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
      <div>
        <p>{result}</p>
      </div>
    </div>
  )
}

export default PatientSymptoms;
