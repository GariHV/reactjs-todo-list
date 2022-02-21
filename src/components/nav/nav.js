import { Link } from 'react-router-dom';
import "./nav.scss"

export function Nav(){
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
                <img className='coin' src= 'coin.png' alt = ''/>
            </ul>
        </nav>
    </div>
    )
}