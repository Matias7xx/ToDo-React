import React from 'react'
import Table from 'react-bootstrap/Table'
import IconButton from '../template/IconButton'

export default props => {
    //Função que vai renderizar as linhas da tabela
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>
                    {todo.description}
                </td>
                <td>
                    <IconButton bstyle='danger' icon='trash-o'
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
