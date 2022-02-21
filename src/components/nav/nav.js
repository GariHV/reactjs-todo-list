import { Link } from 'react-router-dom';
import "./nav.scss"

export function Nav({datos}){
    const {oro} = datos[0]
    return(
        <div className='NavBar'>
        <nav>
            <ul>
                <li>
                    <Link to='/'>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to='/tienda'>
                    Tienda
                    </Link>
                </li>
            </ul>
            <div>
                <img className = 'coin' src = "coin2.png" alt = ''/>
                <h3>{oro}</h3>
            </div>
        </nav>
    </div>
    )
}