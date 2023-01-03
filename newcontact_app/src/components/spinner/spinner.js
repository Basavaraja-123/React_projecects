import React from 'react'
import spinnerImg from  "../imgAndSpinner/spinner/spinner.gif"

let spinner =() =>{
 
    return(
        <React.Fragment>
           <div>
            <img src={spinnerImg} alt='' className='d-block m-auto' style={{width:"200px"}} /> 
           </div>

        </React.Fragment>
    )
}
export default spinner;