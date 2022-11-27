import React from 'react'
class FunctionToClassB extends React.Component{
    render(){
        return <div>
        <h1>Function to class BB</h1>
       <pre>{JSON.stringify(this.props)}</pre>
       <h6>Employee Name:{this.props.EmpName}</h6>
       <h6>Employee ID:{this.props.EID}</h6>
       <h6>Employee Email ID:{this.props.EmpMailID}</h6>
       <h6>Employee Date of Birth:{this.props.EmpDOB}</h6>
       <h6>Employee Qlification:{this.props.EmpQlification}</h6>
       <h6>Employee Father name:{this.props.EmpFatherName}</h6>
       <h6>Employee Mother name :{this.props.EmpMotherName}</h6> 
     </div>
    }

}
export default FunctionToClassB;