// export default function DataBindingComponent(){
//     var product ={
//         Name : "Samsung Tv",
//         Price : 4500.34,
//         Stock : true
//     }
//     return(
//         <div className="container">
//             <h2 >Product Detailes</h2>
//             <dl>
//                 <dt>Name</dt>
//                 <dd>{product.Name}</dd>
//                 <dt>Price</dt>
//                 <dd>{product.Price}</dd>
//                 <dt>Stock</dt>
//                 <dd>{(product.Stock==true)?"Available" : "Out of Stock"}</dd>
//             </dl>



//         </div>
//     )
// }





//EX:2


// export default function DataBindingComponent(){
//     var categories = ["All", "Electronics","Fashion","Interior"];
//     return(
//         <div className="container">
//             <h2>Categories</h2>
//             <ol>
//                 {
//                     categories.map(category=>
//                         <li key={category}>{category}</li>
//                     )
//                 }
//             </ol>
//             <h2>Select Categories</h2>
//             <select>
//                 {
//                     categories.map(category => 
//                         <option key={category}>{category}</option>
//                     )
//                 }
//             </select>
//         </div>

//     )

// }



//EX:3

// export default function DataBindingComponent(){
//     var products =[
//         {Name: "Samsung TV", Price: 24000},
//         {Name: "LG TV", Price: 25000}
//     ];
//     return(
//         <div className="container">
//             <h2>Product Table</h2>
//             <table className="teble table-hover">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         products.map(product =>
//                             <tr >
//                                 <td>{product.Name}</td>
//                                 <td>{product.Price}</td>
//                             </tr>
//                         )
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }



//EX:4



// export default function DataBindingComponent(){
//     var menu = [
//         {Category: "Electronics", Products: ["Samsung Tv", "Mobile"]},
//         {Category: "Footwear", Products:["Nike Causuals","Addidas"]}
//     ];
//     return(
//         <div className="container">
//             <h2>Categories</h2>
//             <ol>
//                 {
//                     menu.map(item =>
//                         <li>{item.Category}
//                             <ul>
//                                 {
//                                     item.Products.map(product =>
//                                         <li>{product}</li>
//                                     )
//                                 }
//                             </ul>
//                         </li>
//                     )
//                 }
//             </ol>

//             <h2>Select a Product</h2>
//             <select>
//                {
//                  menu.map(item =>
//                     <optgroup key={item.Category} label={item.Category}>
//                         {
//                             item.Products.map(product=>
//                                 <option key={product}>{product}</option>
//                             )
//                         }
//                     </optgroup>
                   
//                     )
//                }
//             </select>

//         </div>
//     )
// }


//EX:5

// export default function DataBindingComponent(){
//     var userName = "Bharath";
//     return(
//        <div className="container">
//         <h2>userName</h2>
//         <input type="text" value={userName}></input><br/>
//         Hello! {userName}
//        </div>
//     )
// }


//EX:6

// import { useState } from "react";


// export default function DataBindingComponent(){
//     const [products,setProducts]=useState(["Electronics", "Fashion", "Interior"]);

//     return(
//         <div className="container">
//             <h2>Products</h2>
//             <ol>
//                 {
//                     products.map(product =>
//                         <li key={product}>{product}</li>
//                     )
//                 }
//             </ol>
//         </div>
//     )
// }



//EX:Featching API


import { useEffect, useState } from "react";

export default function DataBindingComponent(){
    const [mars, setMars] =useState();
    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response => response.json())
        .then(data=>{
            setMars(data);
        })
    },[])

    return(
        <div className="container">
           <h2>Maras Photos</h2>
           <table className="table table-hover">
            <thead>
                <tr>
                    <th>Photo Id</th>
                    <th>Camera Name</th>
                    <th>Rover Name</th>
                    <th>Preview</th>
                </tr>
            </thead>
            <tbody>
                {
                    mars.photos.map(photo=>
                        <tr>
                            <td>{photo.id}</td>
                        </tr>
                    )
                }
            </tbody>
           </table>
        </div>
    )
}


