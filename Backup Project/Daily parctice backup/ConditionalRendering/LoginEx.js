import React from "react";


class LoginEx extends React.Component{
    state={
        isLogin:false,
        message:"",
    };
    loginHandelr=() =>{
        this.setstate({ isLogin: true, message: "welcome to New yark"});
    };
    logoutHandelr = () => {
        this.setState({isLoggin:false, message:"congradulation"});
    };
    render(){
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Login Example</div>
                                <div className="card-body">
                                      <>
                                    <button className="btn btn-success mr-5"
                                    onClick={this.loginHandelr}>Login</button>
                                    </>
                                  
                                     <>
                                    <button className="btn btn-danger" onClick={this.logoutHandelr}>
                                        Logout 
                                    </button>
                                    </>
                                    
                                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginEx;