import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default props => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className='fa fa-calendar-check-o' href="#">TodoApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#/todos">Tarefas</Nav.Link>
                <Nav.Link href="#/about">Sobre</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)