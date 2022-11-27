import React from 'react';
import ClassB from './ClassB'
class ClassAA extends React.Component{
   Employee={ 
    e_Id:1002,
    emp_Name:"Basavaraj"

   }
    render(){
        return <div>
        <h1>Class to Class</h1>
        < ClassB info={this.Employee}/>
        </div>
    }
}
export default ClassAA;
