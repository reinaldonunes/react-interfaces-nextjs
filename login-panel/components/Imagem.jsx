export default function Imagem(props){
    const img = props.src
    const width = props.width

    return(
        <img src={img} width={width} className="styleImg" />
    )
}