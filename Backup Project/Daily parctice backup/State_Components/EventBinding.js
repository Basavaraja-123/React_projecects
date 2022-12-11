import React from "react";
class EventBinding extends React.Component{

    state={
        emp_id:1002,
        emp_name:"shardha kapoor",
        emp_salary:10000
    }

    btnHandler(value){
        console.log ("Reading button data...",value);
        this.setState({
            emp_salary:30000+value,
        });
    }
    render(){
        return (
        <>
        <h1> Event Binding. Emp_salary Hike.</h1>
        <button onClick={this.btnHandler.bind(this,5000)}> Hike 5K</button>
        <hr/>
        <button onClick={this.btnHandler.bind(this,10000)}> Hike 10K</button>
        <hr/>
        <button onClick={this.btnHandler.bind(this,0)}> Hike 00</button>

        </>
        );
    }
}
export default EventBinding;
