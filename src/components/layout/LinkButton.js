import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './LinkButton.module.css'

function LinkButton({ to, text}){
    return(
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}
       
export default LinkButton