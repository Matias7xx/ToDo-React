import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3003/api/todos'
export default class Todo extends Component {

    state = { //Estado do componente
        description: '',
        list: []
    }

    handleChange = (e) => { //Recebe o evento sempre que o usuário digitar no input
        this.setState({...this.state, description: e.target.value}) //Att o estado
    }

    handleAdd = () => { //Adiciona uma nova tarefa
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => console.log('Funcionou'))
    }
    
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}