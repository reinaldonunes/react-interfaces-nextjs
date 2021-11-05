import InputField from "../components/FieldInput"
import Button from "../components/Button"
import MensagemOk from "../components/MensagemOk"
import { useState } from "react"

export default function Form(props){
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [errorUser, setErrorUser] = useState("")
    const [errorPass, setErrorPass] = useState("")

    function updateUser(param){ setUser(param.target.value) }
    function updatePass(param){ setPass(param.target.value) }

    function sendForm(param){
        setErrorUser("")
        setErrorPass("")

        if(user === "") setErrorUser(<p className="displayErro">O campo Username não pode ficar vazio</p>)
        if(pass === "") setErrorPass(<p className="displayErro">O campo Password não pode ficar vazio</p>)
    }

    return(
       <form action="javascript:;" method="post" className="styleForm">
           <InputField label="Username" valorCampo={updateUser} />
           {errorUser ? errorUser : ""}
           <InputField label="Password" valorCampo={updatePass} type="yes" />
           {errorPass ? errorPass : ""}
           <Button text="Entrar" validaForm={sendForm} />
       </form>
    )
}