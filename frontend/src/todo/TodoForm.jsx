import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IconButton from '../template/IconButton'

export default props => (
    <Form>
        <Row>
            <Col xs={12} sm={9} md={10}>
                <Form.Group controlId="description">
                    <Form.Control type="text" placeholder="Adicione uma tarefa"
                    onChange={props.handleChange}
                    value={props.description} />
                </Form.Group>
            </Col>

            <Col xs={12} sm={3} md={2}>
                <IconButton bstyle='primary' icon='plus'
                    onClick={props.handleAdd}></IconButton>
            </Col>
        </Row>
    </Form>
)
