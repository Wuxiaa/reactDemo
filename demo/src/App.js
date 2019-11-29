import React,{ Component } from 'react'
import { Input, Button} from 'antd'
import 'antd/dist/antd.css'
import './index.css'
import List from './List'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            list : [
                '我是第1条数据',
                '我是第2条数据',
                '我是第3条数据',
                '我是第4条数据',
            ],
            inputValue:''
        }
        this.addItem = this.addItem.bind(this)
        this.changeInput = this.changeInput.bind(this)
    }

    changeInput(e){
        this.setState({
            inputValue : e.target.value
        })
    }
    addItem(){
        this.setState({
            list : [...this.state.list,this.state.inputValue],
            inputValue : ''
        })
    }
    render(){
        return(
            <>
              <div className = 'box'>
                <Input 
                    className = 'input' 
                    onChange = {this.changeInput} 
                    value = {this.state.inputValue}
                />  
                <Button type = 'primary' onClick = {this.addItem}>添加</Button>
              </div>
              <div>
                  <List list = {this.state.list}/>
              </div>
            </>
        )
    }
}

export default App