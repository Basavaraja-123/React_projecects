import React from "react";
import Header from "./Team_Membar_allocation/Header";

import Footer from "./Team_Membar_allocation/Footer";
import Employees from "./Team_Membar_allocation/Employees";
import { useState} from "react";

function App() {
  const [selectedTeam, setTeam] = useState("TeamB");
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

  function handleTeamSelectionCheng(event) {
    setTeam(event.target.value);
  }

  function handleEmplyeeCardClick(event) {
    const tranceformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(tranceformedEmployees);
  }
  return (
    <>
      <Header
        selectedTeam={selectedTeam}
        teamMembarCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
      />
      <Employees
        employees={employees}
        selectedTeam={selectedTeam}
        handleEmplyeeCardClick={handleEmplyeeCardClick}
        handleTeamSelectionCheng={handleTeamSelectionCheng}
      />

      <Footer />
    </>
  );
}
export default App;
