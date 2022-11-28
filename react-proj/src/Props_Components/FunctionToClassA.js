import React from 'react'
import FunctionToClassB from './FunctionToClassB'

let FunctionToClassA = () => {
    let ename="Chalukyaraj"
    let eid=153153
    let emailId= "Chali@gmail.com"
    let eDob = "11 AUG 1800"
    let eSalary= "$5000"
return <div>
    <hr/>
    <h1> Function to class AA</h1>
    <FunctionToClassB  wish={"Good morning Every one"} EmpName={ename} EID={eid}
    EmpSalary={eSalary} EmpDOB={eDob} EmpMailID={emailId} EmpQlification={"BCA"}
    EmpFatherName={"Mallilkarjna"} EmpMotherName={"Sarrojamma"}    />

</div>
}

export default FunctionToClassA;


