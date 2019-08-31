import React from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'
import IconButton from '../template/IconButton'

const TodoList = props => {
    //Função que vai renderizar as linhas da tabela
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>
                    {todo.description}
                </td>
                <td>
                    <IconButton bstyle='success' icon='check' hide={todo.done}
                    onClick={() => props.handleMarkAsDone(todo)}></IconButton>
                    <IconButton bstyle='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)}></IconButton>
                    <IconButton bstyle='danger' icon='trash-o' hide={!todo.done}
                    onClick={() => props.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </Table>
    )
}

//Mapear estado do Redux
const mapStateToProps = state => ({
    list: state.todo.list //VEM DO REDUCER
});
export default connect(mapStateToProps)(TodoList) //Conectar Redux