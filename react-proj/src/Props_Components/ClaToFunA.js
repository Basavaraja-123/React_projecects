import React from 'react'
import ClaToFunB from  "./ClaToFunB"


class ClaToFunA extends React.Component{
    product ={
    name: "Iphone 14 pro mx",
    price:  129999,
    color: ['Black','White','Gray','Gold','Blue'],
    brand: "Iphone",
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