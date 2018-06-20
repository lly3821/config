import React,{Component} from 'react'
import {Route,Switch} from 'react-router'
import {hot} from 'react-hot-loader'
import Loadable from 'react-loadable'

const Loading = () =>{
    return(<p>Loading</p>)
}
const AppRoutes = () => {
    const WrapApp = Loadable({
        loader: () => import('./pages/App'),
        loading:Loading
    })
    return(
        <Switch>
            <Route path='/app' component={WrapApp}/>
        </Switch>
    )
}
export default hot(module)(AppRoutes)

