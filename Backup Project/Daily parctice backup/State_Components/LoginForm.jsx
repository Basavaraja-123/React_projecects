import React, { Component } from 'react'

 class LoginForm extends Component {
    state ={ Email:"",
             PassWord:"",
    }
    email =(Event) => {
        this.setState({Email:Event.target.value})
    }
    PassWord =(Event1) => {
        this.setState({PassWord:Event1.target.value})
    }
  render() {
    return (
      <div> <h1>LoginForm</h1>
      <pre>{JSON.stringify(this.state)}</pre>
        <form>
            <lable>Email id</lable> 
            <input type="text" onChange={this.email} /> <br/>
            <label> PassWord:</label>
            <input type="text" onChange={this.PassWord}/> <br/>
            <input type="submit"/> <br/>
        </form>
      </div>
      
    )
  }
}
export default LoginForm