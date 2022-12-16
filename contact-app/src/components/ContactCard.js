import React from 'react' 
import "./ContactCard.css"

const ContactCard = (props) => {
    const{id,name,email} = props.Contacts; 
  return (
     
        <div className="item">
            <img className='ui avatar image' src={"https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"}  alt="user"/>
            <div className="content">
                <div className="header"> {name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon" > </i>
        </div>
    
  )
}

export default ContactCard