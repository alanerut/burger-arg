import Logo from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1 >Bienvenido a BurgerArg</h1>
      </Link>

      <nav >
        <ul>
          <li>
            <NavLink to={`/categoria/2`}> simples </NavLink>
          </li>
          <li >
            <NavLink to={`/categoria/3`}> dobles y triples </NavLink>
          </li>

        </ul>
      </nav>

      <Logo />


    </header>
  )
}

export default NavBar