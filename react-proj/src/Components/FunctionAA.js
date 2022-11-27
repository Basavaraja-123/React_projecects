import React from 'react'
import FunctionBB from './FunctionBB';
import FunctionB from './FunctionBB'

function FunctionAA (){

    let empId = 1143;
    let empName= "Chalukyaraj (chaali)";

    return <div>
        <hr/> <hr/> <hr/>
        <h1> Function  to Function Components AA</h1>
        <FunctionBB prop1={empId} prop2={empName} />
    </div>

}
export default FunctionAA;