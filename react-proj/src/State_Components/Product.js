import React from 'react'

class Product extends React.Component{
    state={
    Product_name: "Samsung Galaxy S 20 Pro ",
    image :"https://rukminim1.flixcart.com/image/416/416/l0sgyvk0/mobile/k/x/c/-original-imagcg22czc3ggvw.jpeg?q=70",
    Camara: "120 pixel",
   
     Price: 66666,
     Qty: 1,
    } 
     incrHandler=()=>{
        this.setState({Qty:this.state.Qty+1})
     }
     decrHandler=()=>{
        this.setState({ Qty:this.state.Qty-1 })
     }


     render(){
               return <div className="continer mt-5">
                <div className="row">
                    <div className="col-md-10">
                        <table className="table table-hover">
                            <thead className="bg-secondary">
                                <th>Name</th>
                                <th>Image</th>
                               
                                <th>Camara</th>
                                <th>Qty</th>
                                <th>Total Price</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >{this.state.Product_name}</td>
                                    <td ><img src={this.state.image} alt="" height='100px'/></td>
                                    <td >{this.state.Camara}</td>  
                                    <td > <i className="fa fa-minus-circle" onClick={this.decrHandler}></i>
                                         {this.state.Qty} 
                                         <i className="fa fa-plus-circle" onClick={this.incrHandler}></i>
                                         </td>
                                    <td> {this.state.Price * this.state.Qty} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
               </div>
}

}
export default Product;