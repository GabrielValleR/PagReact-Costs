import {useHistory} from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
 
function NewProject(){
const history = useHistory() // ele permite fazer redirects nas pags 
                            //serve para redirecionar o usuario para outra pg
function createPost(project){
    // initalze cost and service
    project.cost = 0
    project.services =[]

    fetch('http://localhost:5000/projects', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json',
        }, 
        body: JSON.stringify(project)
    })
        .then((resp) => resp.json())
        .then((data) =>{
            console.log(data)
            //rediect
            history.push('/projects', {message: 'Projeto criado com sucesso!'})
        })
    .catch(err=> console.log(err))    
}

    return(
        <div className={styles.newproject_contaoner}>
       <h1>Criar Projeto</h1>
       <p>Crie seu projeto para depois adicionar os serviços</p>
       <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
       
        </div>
    )
}

export default NewProject