import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IconButton from '../template/IconButton'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search } from './todoActions'

class TodoForm extends Component {

    componentDidMount() { //Vai carregar a lista de items imediatamente após o componente ser renderizado
        this.props.search()
    }

    keyHandler = (e) => { //Teclas de atalho
        const { add, search, description } = this.props
        if(e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            this.props.handleClear()
        }
    }

    render() {
        const { add, search, description } = this.props
        return (
            <Form className='todoForm'>
            <Row>
                <Col xs={12} sm={9} md={10}>
                    <Form.Group controlId="description">
                        <Form.Control type="text" placeholder="Adicione uma tarefa"
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description} />
                    </Form.Group>
                </Col>
    
                <Col xs={12} sm={3} md={2}>
                    <IconButton bstyle='primary' icon='plus'
                        onClick={() => add(description)}></IconButton>
                    <IconButton bstyle='info' icon='search'
                        onClick={() => search()}></IconButton>
                    <IconButton bstyle='secondary' icon='close'
                        onClick={this.props.handleClear}></IconButton>
                </Col>
            </Row>
        </Form>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})
const mapDispatchToProps = dispatch => //Dispara a ação e passa ela para os reducers
    bindActionCreators({ add, changeDescription, search }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)