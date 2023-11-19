import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget';
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <header>

      <Link to="/">
      <h1 className='title'>8-Bits</h1>
      </Link>

        <nav>
            <ul>
              <li> 
                <NavLink to= "categoria/1">Auriculares</NavLink>
              </li>
              <li>
                <NavLink to= "categoria/2">Cámaras</NavLink>
                </li>
              <li>
                <NavLink to= "categoria/3">Música</NavLink>
                </li>
                <li>
                <NavLink to= "categoria/4">Consolas</NavLink>
                </li>
            </ul>
        </nav>
        <CardWidget/>
        
    </header>
  )
}

export default NavBar