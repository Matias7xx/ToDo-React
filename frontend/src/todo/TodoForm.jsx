import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IconButton from '../template/IconButton'
import { connect } from 'react-redux'

const TodoForm = props => {

    const keyHandler = (e) => { //Teclas de atalho
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <Form className='todoForm'>
            <Row>
                <Col xs={12} sm={9} md={10}>
                    <Form.Group controlId="description">
                        <Form.Control type="text" placeholder="Adicione uma tarefa"
                        onChange={props.handleChange}
                        onKeyUp={keyHandler}
                        value={props.description} />
                    </Form.Group>
                </Col>
    
                <Col xs={12} sm={3} md={2}>
                    <IconButton bstyle='primary' icon='plus'
                        onClick={props.handleAdd}></IconButton>
                    <IconButton bstyle='info' icon='search'
                        onClick={props.handleSearch}></IconButton>
                    <IconButton bstyle='secondary' icon='close'
                        onClick={props.handleClear}></IconButton>
                </Col>
            </Row>
        </Form>
    )
    
}

const mapStateToProps = state => ({
    description: state.todo.description
})
export default connect(mapStateToProps)(TodoForm)