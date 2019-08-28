import React from 'react'
import Table from 'react-bootstrap/Table'

export default props => {
    //Função que vai renderizar as linhas da tabela
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
            </tr>
        ))
    }

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </Table>
    )
}
