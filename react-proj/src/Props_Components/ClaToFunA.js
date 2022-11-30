import React from 'react'
import ClaToFunB from  "./ClaToFunB"


class ClaToFunA extends React.Component{
    product ={
    name: "Iphone 14 pro mx",
    price:  129999,
    color: ['Black','White','Gray','Gold','Blue'],
    brand: {version1:"Iphone", version2:"Aphone",version3:"Bphone", version4:"Cphone" }
    }

    render( ){
        return <div>   
            <h1> Class to function AA</h1>
            <hr/>
            <ClaToFunB basava={this.product}   />
                       
             </div>
  } 
}
export default ClaToFunA;