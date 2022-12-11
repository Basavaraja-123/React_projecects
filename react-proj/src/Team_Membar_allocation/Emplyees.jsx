import React from "react";
import { useState } from "react";
import Imgmale from "./Images/male.jpg";
import Imgfemale from "./Images/female.jpg";

const Emplyees = () => {
  const [selectedTeam,setTeam]=useState('TeamB');
  const [employees, setEmployees] = useState([
    {
      id: 101,
      fullName: "Basavaraja N M",
      designation: "Javascript Devloper",
      gender: "Male",
      teamName: "TeamA",
      branch: "Canada",
    },
    {
      id: 102,
      fullName: "Ashok ProStack",
      designation: "React Devloper",
      gender: "Male",
      teamName: "TeamB",
      branch: "America",
    },
    {
      id: 103,
      fullName: "Vidya ProStack",
      designation: "Java Devloper",
      gender: "FeMale",
      teamName: "TeamC",
      branch: "Londan",
    },
    {
      id: 104,
      fullName: " merapakaye Prasanna",
      designation: "Javascript Devloper",
      gender: " FeMale",
      teamName: "TeamA",
      branch: "South koria",
    },
    {
      id: 105,
      fullName: " Bandari Chandana",
      designation: "Javascript Devloper",
      gender: "FeMale",
      teamName: "TeamB",
      branch: "Pakistan",
    },
    {
      id: 106,
      fullName: " Cadbury Teja",
      designation: "Redux Devloper",
      gender: "FeMale",
      teamName: "TeamC",
      branch: "Australia",
    },
    {
      id: 107,
      fullName: "Chaali ProStack",
      designation: "Java Devloper",
      gender: "Male",
      teamName: "TeamA",
      branch: "Newzland",
    },
    {
      id: 108,
      fullName: "Ashok kumar",
      designation: "Full Stack Devloper",
      gender: "Male",
      teamName: "TeamA",
      branch: "China",
    },
    {
      id: 109,
      fullName: "Chalukyaraj ProStack",
      designation: "Full Stack Devloper",
      gender: "Male",
      teamName: "TeamD",
      branch: "India",
    },
  ]);
  function handleTeamSelectionCheng(event){
    console.log(event.target.value)
    setTeam(event.target.value)
  }
  function handleEmplyeeCardClick(event){
    const tranceformedEmployees=employees.map((Emplyees)=> employees.id=== event.currentTarget.id)

  }

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
        <select className="form-select form-select-sm " value={selectedTeam} onChange={handleTeamSelectionCheng} >
          <option value="TeamA"> Team A </option>
          <option value="TeamB"> Team B </option>
          <option value="TeamC"> Team C </option>
          <option value="TeamD"> Team D </option>
        </select>
        </div>
        </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => (
              <div
                id={employee.id}
                className="card m-2"
                style={{ cursor: "pointer"}} onClick={handleEmplyeeCardClick} 
              >
                {(employee.gender==='Male')?
                <img src={Imgmale} alt="img" className="card-img-top" />:
                <img src={Imgfemale} alt="img" className="card-img-top" />}

                <div className="card-body">
                  <h5 className="cart-title"> 
                    {" "}
                    Full Name: {employee.fullName}
                  </h5>
                  <p className="cart-text">
                    <b>Disignation: </b> {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </main>
  );
};

export default Emplyees;
