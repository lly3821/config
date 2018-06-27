import React,{Component} from 'react'
import Pagination from './pagination'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            current:1,
            pagesize:3,
            total:100,
        }
    }

    onPageChange = (page) => {
        console.log(page)
        this.setState({current:page})
    }
    onSizeChange = (newsize) =>{
        this.setState({pagesize:newsize})
    }

    render(){

        return(
        <div>
            <h1>My App</h1>
            <Pagination
                total = {this.state.total}
                current = {this.state.current}
                pagesize = {this.state.pagesize}
                gotoCurrent = {this.onPageChange}
                SizeChange = {this.onSizeChange}
            />
        </div>
        )
    }
}

export default App
