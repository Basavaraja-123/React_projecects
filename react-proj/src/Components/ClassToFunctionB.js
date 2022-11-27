import React from 'react'
class ClassToFunctionB extends React.Component{
    render(){
             return <>
             <h1>Class to Function BB with Array-Objects</h1>
              <pre>{JSON.stringify(this.props)}</pre>
              <hr/>
              <h6>EmployeeName:{this.props.User[0][0].Ename}</h6>
              <h6>Employee ID:{this.props.User[0][0].id}</h6>
              <h6>Employee Mail id:{this.props.User[0][0].mailId}</h6>
              <h6>Employee Salary:{this.props.User[0][0].esalary}</h6>
              <h6>Employee Location:{this.props.User[0][0].eLocation}</h6>
              <hr/>
              <hr/>
              <h6>EmployeeName:{this.props.User[1][0].Ename}</h6>
              <h6>Employee ID:{this.props.User[1][0].id}</h6>
              <h6>Employee Mail id:{this.props.User[1][0].mailId}</h6>
              <h6>Employee Salary:{this.props.User[1][0].esalary}</h6>
              <h6>Employee Location:{this.props.User[1][0].eLocation}</h6>
              <hr/>
              <hr/>
              <h6>EmployeeName:{this.props.User[2][0].Ename}</h6>
              <h6>Employee ID:{this.props.User[2][0].id}</h6>
              <h6>Employee Mail id:{this.props.User[2][0].mailId}</h6>
              <h6>Employee Salary:{this.props.User[2][0].esalary}</h6>
              <h6>Employee Location:{this.props.User[2][0].eLocation}</h6>


               </>

    }
}
export default ClassToFunctionB;