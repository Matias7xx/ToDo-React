import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default props => (
<Navbar className='rounded' collapseOnSelect expand="lg"  bg="dark" variant="dark">
        <Container>
        <Navbar.Brand className='fa fa-calendar-check-o' href="#">TodoApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#/todos">Tarefas</Nav.Link>
                <Nav.Link href="#/about">Sobre</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
)