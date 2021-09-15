import Nav from "./Nav"

const Header = ({titulo, subtitulo, edad, id}) => {
/*const Header = (props) => {
const {titulo, subtitulo, edad, id} = props
}*/
    /*
    console.log(parametro)
    console.log(parametro.titulo)
    console.log(parametro.subtitulo)
    console.log(parametro.edad)
    */
    return(
        <header className="test" id={id}>
            <h1>{subtitulo}</h1>
            <p>{edad}</p>
            <p className="material-icons">shopping_cart</p>
            <nav/>
        </header>
    )

}