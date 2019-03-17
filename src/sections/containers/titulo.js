import React,{Component} from 'react'
import  {Container, Row}  from 'react-bootstrap';
import './titulo.css'


class Titulo extends Component{
    render(){
        return(
            <Container className="contentTitle" >
                <span className="titulo" >Cursos de</span><br></br>
                <span className="titulo" >Verano +NEM</span><br></br>
                <span className="subtitulo" >No dejes pasar esta increíble oportunidad. Inscribite acá</span>
            </Container>
        )
    }
}

export default Titulo;