//Actions do Todo
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

//Action Creator que vai buscar os serviços do BackEnd
export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

/*export const add = (description) => { //Adicionar uma tarefa SEM THUNK
    const request = axios.post(URL, { description })
    return [
        { type: 'TODO_ADDED', payload: request },
        search()
    ]
}*/

export const add = (description) => { //Adicionar tarefa COM THUNK(Promise)
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(ress => dispatch(search()))
    }
}

export const markAsDone = (todo) => { //Marcar como concluido //MIDDLEWARE THUNK
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => { //Marcar como pendente //MIDDLEWARE THUNK
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => { //Remover TODO MIDDLEWARE THUNK
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => { //Limpar o campo
    return { type: 'TODO_CLEAR' }
}