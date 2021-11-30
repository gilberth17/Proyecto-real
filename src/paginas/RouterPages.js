import React from 'react'
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import PaginaPrincipal from './PaginaPrincipal'
import login from './login'
import contact from './contact'
import inicio from './inicio'
import productos from './productos'


export default function RouterPages() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={PaginaPrincipal}/>
                    <Route path='/login' exact component={login}/>
                    <Route path ='/contact' exact component={contact}/>
                    <Route path ='/inicio' exact component={inicio}/>
                    <Route path ='/productos' exact component={productos}/>
                   
                </Switch>
            </Router>
        </div>
    )
}
