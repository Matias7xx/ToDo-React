import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3003/api/todos'
export default class Todo extends Component {
    //***APÓS A MIGRACÃO PARA REDUX, NÃO SERÁ NECESSÁRIO O USO DE NENHUM MÉTODO DESTA CLASSE !!!
    constructor(props) {
        super(props)
        this.refresh()
    }

    state = { //Estado do componente
        description: '',
        list: []
    }

    /*refresh = () => { //Atualizar a lista com a data mais recente para a mais antiga
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => console.log(resp.data))
    }*/

    refresh = async(description = '') => { //Refresh com Async Await
        try {
            const search = description ? `&description__regex=/${description}/` : '' //Se for usar o search

            const response = await axios.get(`${URL}?sort=-createdAt${search}`)
        
            this.setState({...this.state, description, list: response.data })
        } catch (err) {
            console.log('Erro:', err);
        }
        }

    handleChange = async(e) => { //Recebe o evento sempre que o usuário digitar no input
        await this.setState({...this.state, description: e.target.value}) //Att o estado
    }

    /*handleAdd = () => { //Adiciona uma nova tarefa
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => console.log('Funcionou'))
    }*/

    handleAdd = async() => { //handleAdd com Async Await
        try {
            if(this.state.description === '') {
                alert('Insira uma tarefa !')
            } else {
                const response = await axios.post(URL, {
                description: this.state.description.trim()
            })

            console.log('Informações', response.data)

            this.refresh()
            }
        } catch (err) {
            console.log('Erro:', err);
        }
    }

    handleRemove = async(todo) => { //Remoção
        try{
            await axios.delete(`${URL}/${todo._id}`)
            this.refresh(this.state.description)
        } catch(err) {
            console.log('Erro:', err)
        }
    }

    handleMarkAsDone = async(todo) => { //Alterar tarefa como CONCLUÍDA
        try{
            await axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            this.refresh(this.state.description)
        } catch(err) {
            console.log('Erro:', err)
        }
    }

    handleMarkAsPending = async(todo) => { //Alterar tarefa como PENDENTE
        try{
            await axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            this.refresh(this.state.description)
        } catch(err) {
            console.log('Erro:', err)
        }
    }

    handleSearch = async() => { //Função para SEARCH(filtrar alguma tarefa)
        try{
        await this.refresh(this.state.description)
        } catch(err) {
            console.log('Erro:', err)
        }
    }

    handleClear = async() => { //Limpar o input
        try{
        await this.refresh()
        } catch(err) {
            console.log('Erro:', err)
        }
    }
    
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    //description={this.state.description}
                    //handleChange={this.handleChange}
                    //handleAdd={this.handleAdd}
                    //handleSearch={this.handleSearch}
                    //handleClear={this.handleClear} 
                    />
                <TodoList
                    //list={this.state.list} //Não é necessário ao usar Redux
                    //handleMarkAsDone={this.handleMarkAsDone}
                    //handleMarkAsPending={this.handleMarkAsPending}
                    //handleRemove={this.handleRemove}
                    />
            </div>
        )
    }
}