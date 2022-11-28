import React from 'react'
function FunctionBB(props){

    return(
        <div>
            <h1>Function to function Components BB </h1>
            <pre>{JSON.stringify(props)}</pre>
            <h4> Emp_Id : {props.prop1}</h4>
            <h4> EMP_Name : {props.prop2}</h4>
        </div>
    )


}

export default FunctionBB;