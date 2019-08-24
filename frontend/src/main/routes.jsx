//Usando react-router
import React from 'react'
import { Route, Redirect, HashRouter } from 'react-router-dom'

import Todo from '../todo/Todo'
import About from '../about/About'

export default props => (
    <HashRouter>    
        <div>
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/todos' />
        </div>
    </HashRouter>
)
