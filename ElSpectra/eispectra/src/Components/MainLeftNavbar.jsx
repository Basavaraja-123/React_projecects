// import React, {useState} from 'react'
import '../App.css';
import React from 'react';
function MainLeftNavbar(props){
    let dataBase = props.dataBase;
     let displayLeftNavImage = props.displayLeftNavImage;

    return(
        <div>
            {
                dataBase.map((item)=>{
                    return <div className="left_div" onClick={()=>displayLeftNavImage(item.id)}>
                        <span className="left_name">{item.name}</span>
                        <span className="left_click">{item.numberOfClicks}</span>
                    </div>
                })
            }
        </div>
    );
}

export default MainLeftNavbar