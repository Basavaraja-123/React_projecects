import React from "react";
import { Link } from "react-router-dom";

const ViewContact = () => {
  return (
    <React.Fragment>
      <section className="container">
        <div className="row">
          <div className="col">
            <p className="hr text-warning fs-bold"> View Contact </p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              maiores quam mollitia iusto, impedit qui ullam ipsa similique
              aliquid blanditiis neque voluptates corporis sequi dolor officia
              laboriosam eaque officiis enim.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="view contact mt3">
       <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKBHHyjDNOl4gz8MiBWJOYEJn9Tz0LpC-sQ&usqp=CAU" alt="" className="contact-img"/>

          </div>
          <div className="col-md-8">
          <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Name:<span className="fw-bold">Basavaraj</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Mobail:<span className="fw-bold">8892224959</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Email:
                          <span className="fw-bold">
                            Basavaraj@gmail.com
                          </span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Company
                          <span className="fw-bold">
                            Basavaraj@gmail.com
                          </span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Title:
                          <span className="fw-bold">
                            Basavaraj@gmail.com
                          </span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Groups:
                          <span className="fw-bold">
                            Basavaraj@gmail.com
                          </span>
                        </li>
                      </ul>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to={'/contacts/list'} className=" btn btn-warning">Back</Link>
          </div>
        </div>
       </div>

      </section>
    </React.Fragment>
  );
};

export default ViewContact;
