export default function ObjectScreen(props){

    const color = props.color

    switch(color){
        case 1:
            var c = "red"
            break
        case 2:
            var c = "blue"
            break
        case 3:
            var c = "yellow"
            break
        case 4:
            var c = "purple"
            break
        default:
            var c = "#00ff00"
    }

    return(
        <div style={{
            width:"30px",
            height:"30px",
            display:"flex",
            backgroundColor: c,
            borderRadius: "50%",
            marginTop: props.horizon,
            marginLeft: props.vertical,
            cursor: "pointer",
            transitionDuration: "0.2s"
        }}></div>
    )
}