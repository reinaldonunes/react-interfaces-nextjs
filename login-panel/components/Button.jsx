export default function Button(props){
    return(
       <button className="styleButton" onClick={e => props.validaForm(e)}>{props.text}</button>
    )
}