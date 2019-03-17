import React, {Component} from 'react';
import Titulo from './titulo'
import  {Form, Button, Col, Container, Row}  from 'react-bootstrap';
import {validateRUT} from '../../utils/input-validator'
import './formulario.css'


class Formulario extends Component{
    constructor(...args) {
        super(...args);
        this.state = { validated: false };
    }

    handleSubmit(event) {
        var boolstate = validateRUT(document.getElementById("formNombre").value);

        const form = event.currentTarget;
        if (form.checkValidity() === false || boolstate===false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({ validated: true });
    }
    
   render(){
        const { validated } = this.state;
       return(
             <Container className="contenedorPrincipal" >
                 <Form
                    noValidate
                    validated={validated}
                    onSubmit={e => this.handleSubmit(e)}
                 >
                    <Row>
                        <Col>
                            <Titulo></Titulo>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Container className="contenedorFormulario" >
                                <Row>
                                    <Col sm>
                                        <Form.Group controlId="formNombre">
                                            <Form.Label>Nombre
                                                    <span className="red" >*</span>

                                            </Form.Label>
                                            <Form.Control type="nombre" placeholder="ej: Jose Conseco" required />                             
                                        </Form.Group>
                                    </Col>
                                    <Col sm>
                                    <Form.Group controlId="formTelefono">
                                            <Form.Label>Telefono
                                                <span className="red" >*</span>
                                            </Form.Label>
                                            <Form.Control type="telefono" placeholder="ej: +569 3772 9376" required />
                                        </Form.Group>
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                        </Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm> 
                                        <Form.Group controlId="formNombre">
                                            <Form.Label>Correo
                                            <span className="red" >*</span>
                                            </Form.Label>
                                            <Form.Control type="correo" placeholder="ej: correo@gmail.com" required />
                                        </Form.Group>
                                    </Col>
                                    <Col sm>
                                    <Form.Group controlId="formNombre">
                                            <Form.Label>Rut
                                            <span className="red" >*</span>
                                            </Form.Label>
                                            <Form.Control type="rut" placeholder="ej: 26.492.283-1"  required />
                                        </Form.Group>
                                        </Col>
                                </Row>
                                <Row >
                                    <br></br>
                                </Row>
                                <Row >
                                <Col sm>
                                <Button type="submit" variant="primary" size="md" block>
                                            Inscribirse
                                        </Button>
                                </Col>
                            </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row >
                        <br></br>
                    </Row>
                </Form>
            </Container>
           
       )
   }
}

export default Formulario;
