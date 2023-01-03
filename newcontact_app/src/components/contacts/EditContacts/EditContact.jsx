import React from 'react'
import { Link } from 'react-router-dom'

const EditContact = () => {
  return (
    <React.Fragment>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-primary fw-bold">Edit Contact</p>
              <p className="fst-italic" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis quasi ex, nisi nulla impedit eveniet voluptates quisquam maiores voluptate, culpa itaque doloremque! Aliquam aperiam neque rem doloremque molestiae sint!</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Photo URL" />
                </div>
                <div className="mb-2">
                  <input type="number" className="form-control" placeholder="Mobil No" />
                </div>
                <div className="mb-2">
                  <input type="Email" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Company Name" />
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Title" />
                </div>
                <select className="form-control">
                  <option> select A Group</option>
                  
                   </select>

                <div className="mb-2">
                  <input type="submit" className="btn btn-primary" value="Update" />
                  <Link to={'/contacts/list'} className="btn btn-dark ms-2">Close</Link>                
                  </div>
              </form>
            </div>
            <div className="col-md-6">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Wlq_WqUFdywb7m_6MNWWFiKcNmt-2FDVQC3Dt0CCsZz-MdZLUADjQXa9-QcMJHxEH-s&usqp=CAU" alt="" className='contact-img'/>
              <img src="" alt="" className='contact-img'/>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default EditContact