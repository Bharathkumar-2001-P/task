// import React from "react"

// export default class TwoWayClassDemo extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             title : 'Product Details',
//             Name : 'Samsung TV',
//             Price : 34555,
//             Stock : true,
//             Cities : ['Delhi', 'Hyd'],
//             Rating : {rate:4.5, count:6700}
//         }
//     }
//     render(){
//         return(
//             <div className="container-fluid">
//                 <h2>{this.state.title}</h2>
//                 <dl>
//                     <dt>Name: </dt> <dd>{this.state.Name}</dd>
//                     <dt>Price: </dt> <dd>{this.state.Price}</dd>
//                     <dt> Stock: </dt> <dd>{(this.state.Stock == true) ? "Stock Available" : "Stock Not Availabel"}</dd>
//                     <dt>City</dt>
//                     <dd>
//                         <ol>
//                             {
//                                 this.state.Cities.map(city=>
//                                     <li key={city}>{city}</li>
//                                 )
//                             }
//                         </ol>
//                     </dd>
//                     <dt>Rating: </dt>
//                     <dd>
//                         <span className="bi bi-star-fill text-success"></span>{this.state.Rating.rate} [{this.state.Rating.count}]
//                     </dd>
                   
//                 </dl>
//             </div>
//         )
//     }
// }




//Two way Binding Dynamic input


import React from "react";

export default class TwoWayClassDemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            UserName: 'John'
        }
        this.handleUserChange = this.handleUserChange.bind(this);
    }

    handleUserChange(e){
       this.setState({
        Username: e.target.value
       })

    }

    render(){
        return(
            <div className="container-fluid">
                <h2>User Details</h2>
                <input type="text" onChange={this.handleUserChange} />
                <br/>
                <p>Hello ! {this.state.UserName}</p>
            </div>
        )
    }

}


