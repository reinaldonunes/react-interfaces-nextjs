export default function Link(props){
    return(
       <a href={props.url} className="styleLink">{props.text}</a>
    )
}