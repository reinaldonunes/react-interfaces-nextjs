export default function Title(props){
    /* default values */
    const sizeHead = props.head
    const title = props.text
    const style = props.style

    switch(sizeHead){
        case 1:
            return <h1 className={style}>{title}</h1>
        case 2:
            return <h2 className={style}>{title}</h2>
        case 3:
            return <h3 className={style}>{title}</h3>
        case 4:
            return <h4 className={style}>{title}</h4>
        case 5:
            return <h5 className={style}>{title}</h5>
        case 6:
            return <h6 className={style}>{title}</h6>
        default:
            return <h1 className={style}>{title}</h1>
    }
}