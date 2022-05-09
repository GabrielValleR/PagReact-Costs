import { useLocation} from 'react-router-dom'
import Conteiner from "../layout/Conteiner"
import LinkButton from '../layout/LinkButton'

import Message from "../layout/Message"

import styles from './Projects.module.css'

function Projects(){
    const location = useLocation()
    let message =''
    if(location.state){
        message = location.state.message
    }
    return(
        <div className={styles.project_container}>
            <div className={styles.title_cotainer}>
            <h1>Meus Projetos</h1>
            <LinkButton to={"/newproject"} text="Criar Novo Projeto"/>
            </div>
             {message && <Message type="success" msg={message} />}
             <Conteiner customClass="start">
                 <p>Projetos....</p>
             </Conteiner>
       
        </div>
    )
}

export default Projects