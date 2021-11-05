import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

import Panel from '../components/Panel'
import Title from '../components/Title'
import Div from '../components/Div'
import Button from '../components/Button'
import Number from '../components/Number'

import {lotofacil} from "../functions/lotofacil"

export default function Home() {
  const [numbers, setNumbers] = useState(lotofacil())

  useEffect(() => {
    setNumbers(lotofacil())
  }, [])

  function showNumbers(){
    return numbers.map(
      number => <Number key={number} number={number} style="number" />
    )
  }

  function refreshNumbers(){
    setNumbers(lotofacil())
  }

  return (
    <div className={styles.container} style={{
        height: "100vh",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#050505"
    }}>
        <Panel>
            <Title head={1} style="h1Title" text="RESULTADO LOTOFÁCIL" />
            <Title head={5} style="h5Title" text="Sorteio realizado hoje" />
            <Div style="boxDisplay">
                {showNumbers()}
            </Div>
            <Button style="btnRefresh" text="SORTEAR NOVAMENTE" action={refreshNumbers} />
        </Panel>
    </div>
  )
}
