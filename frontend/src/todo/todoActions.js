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

export const add = (description) => { //Adicionar uma tarefa
    const request = axios.post(URL, { description })
    return [
        { type: 'TODO_ADDED', payload: request },
        search()
    ]
}