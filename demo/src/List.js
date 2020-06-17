import React,{ Component } from 'react'
import { List,Button } from 'antd'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.DelItem = this.DelItem.bind(this)
    }
    DelItem(index){
        this.props.deleteItem(index)
    }
    render(){
        return (
            <List
                className = 'list'
                dataSource = {this.props.list}
                renderItem = {(item,index) => (
                    <List.Item 
                        key = {index}
                        actions = {[ 
                        <Button  
                            danger 
                            size = 'small'
                            onClick = {() =>{this.DelItem(index)}}
                        >删除</Button>]}
                    >
                        {item}
                    </List.Item>
                )}
                bordered
            />
        )
    }
}

export default TodoList