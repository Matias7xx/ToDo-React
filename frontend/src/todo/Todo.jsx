import React, { Component } from 'react'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


export default class Todo extends Component {

    state = { //Estado do componente
        description: '',
        list: []
    }

    handleChange = (e) => { //Recebe o evento sempre que o usuário digitar no input
        this.setState({...this.state, description: e.target.value}) //Att o estado
    }

    handleAdd = () => { //Adiciona uma nova tarefa
        console.log(this.state.description)
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