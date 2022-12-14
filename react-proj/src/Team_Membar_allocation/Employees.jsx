import React from "react";

import Imgmale from "./Images/male.jpg";
import Imgfemale from "./Images/female.jpg";

const Employees = ({employees,selectedTeam,handleEmplyeeCardClick,handleTeamSelectionCheng}) => {
  

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="form-select form-select-sm "
            value={selectedTeam}
            onChange={handleTeamSelectionCheng}
          >
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
                className={
                  employee.teamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                style={{ cursor: "pointer" }}
                onClick={handleEmplyeeCardClick}
              >
                {employee.gender === "Male" ? (
                  <img src={Imgmale} alt="img" className="card-img-top" />
                ) : (
                  <img src={Imgfemale} alt="img" className="card-img-top" />
                )}

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

export default Employees;
