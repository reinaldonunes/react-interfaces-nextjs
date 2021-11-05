export default function Button(props){
    return(
        <button className={props.style} onClick={props.action}>{props.text}</button>
    )
}