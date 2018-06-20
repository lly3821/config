import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from './AppRoutes'

ReactDOM.render((
    <Router>
        <AppRoutes/>
    </Router>
),document.getElementById('root'))
