import React,{Component} from 'react'
import './page.css'

class Pagination extends Component{
    
    goPrev = (prevpage) =>{
        console.log(prevpage)
        if(--prevpage===0)
            return ;
        else return this.props.gotoCurrent(prevpage)
    }


    createPages = () => {
        const {current,pagesize} = this.props
        let prevpage = current
        let nextpage = current
        const totalpage = Math.ceil(this.props.total/this.props.pagesize)
        let pages = []

        pages.push(<li key={0} className={current===1?'nomore':'pre'} onClick = {this.goPrev.bind(null,prevpage)}>上一页</li>)
        for (let i=1 ; i<=totalpage ; i++){
            if(i===current){
                pages.push(<li className='active' key={i}>{i}</li>)
            }
            else{
                pages.push(<li onClick = {this.props.gotoCurrent.bind(null,i)} key={i}>{i}</li>)
            }
        }
        pages.push(<li key={totalpage+1} className={current===totalpage?'nomore':'next'} onClick = {this.props.gotoCurrent.bind(null,++nextpage)}>下一页</li>)
        return pages
    }

    render(){
        const pages = this.createPages(this.props)
        return(
            <div>
                <ul>
                    {pages}
                </ul>
            </div>
        )
    }
}
export default Pagination