// import React from 'react' ;
// import React,{Component} from 'react';
import React, {useState} from 'react';

import '../App.css';


function Center_Navbar(props){
    console.log("id", props)
    let dataBase = props.dataBase;
    let displayLeftNavImage = props.displayLeftNavImage
    // let index = props.leftNavClick;        
    return(
        <div  className="gallery_container" onClick={()=>{displayLeftNavImage(dataBase.id)}}>        
        <div className="image_card">         
           <div key={dataBase.id} className="image_item">
             <h4>{dataBase.name}</h4>
             <div>No of clicks {dataBase.numberOfClicks}</div>
             <img src={require('./Cats_IMG/'+`${dataBase.image}`)} width="250" height="250"/>
             <div><a>Card Link</a></div>             
            </div>
        </div>
      </div>
    );
}

export default Center_Navbar;