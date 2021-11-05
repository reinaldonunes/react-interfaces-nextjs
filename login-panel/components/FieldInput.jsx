export default function FieldInput(props){

    let typeField = props.type ? "password" : "text"

    const styleField = {
        border: "0px",
        borderBottom: "2px solid #40407a",
        padding: "10px 15px",
        display: "flex",
        marginBottom: "30px",
        background: "none",
        fontSize: "16px",
        outline: "none",
        width: "100%",
        color: "#fff"
    }

    return(
       <input onChange={e => props.valorCampo(e)} type={typeField} placeholder={props.label} style={styleField} />
    )
}