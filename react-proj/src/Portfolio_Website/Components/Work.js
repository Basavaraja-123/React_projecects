import "./WorkCardStyle.css";
 import React from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./workCardData"

 
 const Work = () => {
   return (
     <div className="work-container">
        <h1 className="project_heading">Projects</h1>
        <div className="project-container">
         {WorkCardData.map((val,ind)=>{
            return(
                <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text} 
                view={val.view}/>
            )
         })}
            
        </div>
     </div>
   )
 }
 
 export default Work

//  <div className="project-card">
//                 <img  alt="imag"src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-1035171,resizemode-1,msid-95891780/industry/services/property-/-cstruction/elan-to-invest-rs-4000-crore-in-developing-luxury-residential-project-in-gurgaon.jpg"  />
//                 <h2 className="project-title"> Project Title</h2>
//                 <div className="pro-details">
//                     <p></p>
//                     <div className="pro-btns">
//                         <NavLink to={"url.com"} className="btn">View</NavLink>
//                         <NavLink to={"url.com"} className="btn">Source</NavLink>
//                     </div>
//                 </div>
//             </div>