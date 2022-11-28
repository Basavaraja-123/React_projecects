import React from 'react'
import ClassToFunctionB from "./ClassToFunctionB"
class ClassToFunctionA extends React.Component{
    users = [[{id:1001,Ename:"chali",mailId:"chali@gmail.com",esalary:24000, eLocation:"Banglore"}],
             [{id:1002,Ename:"ashok",mailId:"ashok@gmail.com",esalary:26500, eLocation:"Channai"}],
             [{id:1004,Ename:"vidy",mailId:"vidy@gmail.com",esalary:28500, eLocation:"Channai"}],
             [{id:1005,Ename:"Prasana",mailId:"prasana@gmail.com",esalary:27000, eLocation:"Banglore"}],
             [{id:1006,Ename:"teja",mailId:"teja@gmail.com",esalary:30000, eLocation:"Mangalore"}],
             [{id:1007,Ename:"chandana",mailId:"chandana@gmail.com",esalary:28000, eLocation:"Mysore"}] ];
 
    render(){
return <div><h1> Class to Function AA with Array-Objects </h1>
<ClassToFunctionB User={this.users} />
</div>

    }
}
export default ClassToFunctionA;
