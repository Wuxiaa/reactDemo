import React,{ Component } from 'react'
import { List } from 'antd'

class TodoList extends Component{
    render(){
        return (
            <List
                className = 'list'
                dataSource = {this.props.list}
                renderItem = {(item,index) => (
                    <List.Item key = {item + index}>{item}</List.Item>
                )}
                bordered
            />
        )
    }
}

export default TodoList