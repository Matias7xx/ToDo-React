import React from 'react'
import Table from 'react-bootstrap/Table'
import IconButton from '../template/IconButton'

export default props => {
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
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </Table>
    )
}
