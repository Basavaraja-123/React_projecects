import React from 'react'
class ClassB extends React.Component{

    render(){ 
        return <div> <hr/>
        <h2>ClassB Component</h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <h1>{this.props.info.e_Id} </h1>
        <h1>{this.props.info.emp_Name} </h1>


        </div>
    }
}
export default ClassB;