import styles from '../styles/Home.module.css'
import PatientData from "./patient-data/index"
import PatientSymptoms from "./patient-symptoms/index"

export default function Home() {
  return (
    <>
      <PatientData />
      <PatientSymptoms />
    </>
  )
}
