import { Link } from "react-router-dom";

function Navbar (){
    return(
        <nav>
            <ul>
                <li><Link to="/">Home 🏡</Link></li>
                <li><Link to="/pagina1">Pagina 1</Link></li>
                <li><Link to="/pagina2">Pagina 2</Link></li>
                <li><Link to="/pagina3">Pagina 3</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar