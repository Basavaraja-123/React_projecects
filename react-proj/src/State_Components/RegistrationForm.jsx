import React from "react"

class RegistartionForm extends React.Component{

    state={  firstName:"",
             LastName:"",
             EmailId:"",
             PassWord:"",
             ConformPassWord:"" 
            }
            handler = (Event1) => {
            this.setState({[Event1.target.name]:Event1.target.value})
            }
  render(){
    return(
        <div>
            <form> 
                <h1>REGISTRATION FORM </h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <label> Enter your first Name:</label>
                <input type="text" name="firstName" onChange={this.handler} /> <br/>
                <label> Enter your Last Name:</label>
                <input type="text" name="LastName" onChange={this.handler} /> <br/>
                <label> Enter your Email Id:</label>
                <input type="text" name="EmailId" onChange={this.handler}/> <br/>
                <label>Creact your PassWord:</label>
                <input type=" text"  name="PassWord"onChange={this.handler}/><br/>
                <label>Conform your PassWord:</label>
                <input type="text" name="ConformPassWord" onChange={this.handler}/>  <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}
}
export default RegistartionForm;