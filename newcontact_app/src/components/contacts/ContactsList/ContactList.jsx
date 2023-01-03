import React from "react";
import { useEffect } from "react";
import { json, Link } from "react-router-dom";
import { ContactService } from "../../../../server/ContactServices";


const ContactList = () => {

  let [state,setState] = useState(initialState, {
    loading: false,
    contacts: [],
    errorMassage:'' 

  });

  useEffect(effect,async() =>{
    try{
      setState( value { 
        ...state,
        loading:true}
        );

      let response= await ContactService.getALLContacts();
      console.log(response.data);
      setState( value {
        ...state,
        loading:false,
        contacts: response.data
      });
    }
    catch(error){
      setState( value{...state,loading:false,
        errorMassage: error.message 
      });
    }
  },inputs[]);

  let {loading,contacts,errorMassage}=state;





  return (
    <React.Fragment>
      <pre>{JSON.stringify(contacts)}</pre>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  {" "}
                  Contact Manager
                  <Link to={"/Contacts/Add"} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-2" />
                    New
                  </Link>
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, expedita? Consequatur libero quas autem cumque
                  harum alias veritatis itaque magnam, incidunt eveniet optio
                  neque, commodi nemo illum quibusdam, aperiam fuga.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Names"
                      ></input>
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-4">
                      <img
                        className="img-fluid contact-img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_eFgLb2gS5sVutB67chC8HGPlfDHIelYChUoKF7cs1nCb0312D3DWyVq0X1P1AszFrA&usqp=CAU"
                        alt="#"
                      />
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Name:,<span className="fw-bold">Basavaraj</span>{" "}
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Mobail:,<span className="fw-bold">8892224959</span>{" "}
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Email:,
                          <span className="fw-bold">
                            Basavaraj@gmail.com
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-1 d-flex flex-column align-items-center ">
                      <Link
                        to={`/Contacts/View/:ContactID`}
                        className="btn btn-warning my-1"
                      >
                        <i className="fa fa-eye" />
                      </Link>
                      <Link
                        to={`/Contacts/edit/:ContactID`}
                        className="btn btn-primary my-1"
                      >
                        <i className="fa fa-pen" />
                      </Link>
                      <button className="btn btn-danger my-1">
                        <i className="fa fa-trash" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                        <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-4">
                      <img
                        className="img-fluid contact-img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_eFgLb2gS5sVutB67chC8HGPlfDHIelYChUoKF7cs1nCb0312D3DWyVq0X1P1AszFrA&usqp=CAU"
                        alt="#"
                      />
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Name:,<span className="fw-bold">Basavaraj</span>{" "}
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Mobail:,<span className="fw-bold">8892224959</span>{" "}
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Email:,
                          <span className="fw-bold">
                            Basavaraj@gmail.com
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-1 d-flex flex-column align-items-center ">
                      <Link
                        to={`/Contacts/View/:ContactID`}
                        className="btn btn-warning my-1"
                      >
                        <i className="fa fa-eye" />
                      </Link>
                      <Link 
                        to={`/Contacts/edit/:ContactID`}
                        className="btn btn-primary my-1"
                      >
                        <i className="fa fa-pen" />
                      </Link>
                      <button className="btn btn-danger my-1">
                        <i className="fa fa-trash" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactList;
