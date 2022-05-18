import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'
import Conteiner from './Conteiner'

function Navbar(){
    return (
        <nav className={styles.navbar}>
        <Conteiner>
            <Link to="/">
                <img src={logo} alt="Costs"/>    
            </Link>        
            <ul className={styles.list}>
                <li className={styles.item}>
                <Link to="/" >Home</Link>                
                </li>
                <li className={styles.item}>                
                <Link to="/Company">Company</Link>                
                </li>
                <li className={styles.item}>                
                <Link to="/Contact">Contact</Link>                
                </li >
                <li className={styles.item}>                
                <Link to="/Projects">Projects</Link>                
                </li >
                
            </ul>
        </Conteiner>
      </nav>
    )
}

export default Navbar