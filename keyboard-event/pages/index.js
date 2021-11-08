import { useEffect, useState } from 'react'
import ObjectScreen from '../components/ObjectScreen'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [xPos, setXPos] = useState(0)
  const [yPos, setYPos] = useState(0)
  const [color, setColor] = useState(0)

  useEffect(() => {
    const handleKeyUp = (e) => {
      if(e.keyCode === 37){
        setYPos(prevY => prevY - 25)
        setColor(1)
      }
      if(e.keyCode === 38){
        setXPos(prevX => prevX - 25)
        setColor(2)
      }
      if(e.keyCode === 39){
        setYPos(prevY => prevY + 25)
        setColor(3)
      }
      if(e.keyCode === 40){
        setXPos(prevX => prevX + 25)
        setColor(4)
      }
    }
    
    window.document.addEventListener('keyup', handleKeyUp)
    
    return() => {
      window.removeEventListener('keyup',handleKeyUp)
    }
  }, [])

  return (
    <div className={styles.container} style={{
      backgroundColor: "#111",
      height: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }}>
      <h1 style={{
        position: "absolute",
        left: "50%",
        marginLeft: "-200px",
        top: "10%",
        width: "400px",
        textAlign: "center",
        fontSize: "22px",
        color: "#fff"
      }}>PRESSIONE UMA SETA DO TECLADO</h1>
      <ObjectScreen horizon={xPos} vertical={yPos} color={color} />
    </div>
  )
}
