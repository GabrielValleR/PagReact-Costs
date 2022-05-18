import { useLocation} from 'react-router-dom'

import { useState, useEffect} from 'react'

import Conteiner from '../layout/Conteiner'
import LinkButton from '../layout/LinkButton'
import Message from '../layout/Message'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'
import Loading from '../layout/Loading'

function Projects(){
const [projects, setProjects] = useState([])
const [removeLoading, setRemoveLoading] = useState(false)
const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message =''
    if(location.state){
        message = location.state.message
    }

    useEffect(()=> {
       setTimeout(
           ()=>{
            fetch('http://localhost:5000/projects',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err)=> console.log(err))  
           }, 700)
    },[])
    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        }).then(resp => resp.json())
        .then(data =>{
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch(err => console.log(err))
    }
    return(
        <div className={styles.project_container}>
            <div className={styles.title_cotainer}>
            <h1>Meus Projetos</h1>
            <LinkButton to={"/newproject"} text="Criar Novo Projeto"/>
            </div>
             {message && <Message type="success" msg={message} />}
             {projectMessage && <Message type="success" msg={projectMessage} />}
             <Conteiner customClass="start">
                 {projects.length > 0 && 
                    projects.map((project) => (
                        <ProjectCard
                           id={project.id}
                           name={project.name}
                           budget={project.budget}
                           category={project.category.name}
                           key={project.id}
                           handleRemove={removeProject}
                           />
                    ))}
                    {!removeLoading && <Loading/>}
                    {removeLoading && projects === 0 &&(
                        <p>Não há projetos cdastrados!</p>
                    )}
             </Conteiner>
       
        </div>
    )
}

export default Projects