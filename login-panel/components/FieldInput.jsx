export default function FieldInput(props){

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
       <input type="text" placeholder={props.label} style={styleField} />
    )
}