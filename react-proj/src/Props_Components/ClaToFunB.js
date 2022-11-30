import React from 'react'

let ClaToFunB =(props) => {
    return <div>
        <h1>Class to function BB </h1>
        <pre>{JSON.stringify(props)} </pre>
        <p>{props.basava.name}</p>
        <p>{props.basava.price} </p>
        <p>{props.basava.color[1]}</p>
        <p>{props.basava.color[2]}</p>
        <p>{props.basava.color[3]}</p>
    
        <p> {props.basava.brand.version1} </p>
        <p> {props.basava.brand.version2} </p>
        <p> {props.basava.brand.version3} </p>
        <p> {props.basava.brand.version4} </p>

    </div>

}
export default ClaToFunB;