import InputField from "../components/FieldInput"
import Button from "../components/Button"

export default function Form(props){
    const styleForm = {
        width:"100%",
        flexDirection: "column"
    }

    return(
       <form action="javascript:;" method="post" style={styleForm}>
           <InputField label="Seu nome" />
           <InputField label="Seu e-mail" />
           <Button text="Entrar" />
       </form>
    )
}