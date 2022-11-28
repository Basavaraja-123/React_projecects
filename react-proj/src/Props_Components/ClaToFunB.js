import React from 'react'

let ClaToFunB =(props) => {
    return <div>
        <h1>Class to function BB </h1>
        <pre>{JSON.stringify(props)} </pre>
        <p>{props.basava.name}</p>
        <p>{props.basava.price}</p>
        <p>{props.basava.color[2]}</p>
        <p>{props.basava.brand}</p>

    </div>

}
export default ClaToFunB;