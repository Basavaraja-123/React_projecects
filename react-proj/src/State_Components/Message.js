import React from 'react'

class Message extends React.Component{
    state={
        message:"Hello.. Rahul..."
    }
    gmHandler =() => {this.setState({message:this.state.message +"Good Morning"})} 
    gaHandler =() => {this.setState ({message:this.state.message +"Good Afternoon"})}
    gnHandler =() => {this.setState ({message:this.state.message +"Good Night"})}

    render( ) { 
        return <div>
            <h1>Event Handler</h1>
            <h4> Wish:{this.state.message} </h4>
            <button onClick={this.gmHandler}>G M</button> 
            <button onClick={this.gaHandler}>G A</button>
            <button onClick={this.gnHandler}>G N</button>
            
   
        </div>
    }
}
export default Message;