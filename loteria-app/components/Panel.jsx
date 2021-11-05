export default function Panel(props){
    
    const panel = {
        backgroundColor: "#fff",
        borderRadius:"8px",
        padding: "60px 80px",
        width:"90%",
        maxWidth:"700px",
        display:"flex",
        flexDirection: "column"
    }
    return(
        <section style={panel}>
            {props.children}
        </section>
    )
}