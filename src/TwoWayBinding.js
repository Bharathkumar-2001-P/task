import { useState } from "react";

export default function TwoWayBinding(){
    const [product, setProduct] = useState({Name:'', Price:0, City:'', Stock:false});
    const [newProduct, setNewProduct] = useState({Name:'', Price:0, City:'', Stock:false});


function hanleName(e){
    setProduct({
        Name:e.target.value,
        Price: product.Price,
        City:product.City,
        Stock:product.Stock
    })

}
function handlePrice(e){
    setProduct({
        Name:product.Name,
        Price: e.target.value,
        City:product.City,
        Stock:product.Stock
    })

}
function handleCity(e){
    setProduct({
        Name:product.Name,
        Price: product.Price,
        City:e.target.value,
        Stock:product.Stock
    })

}
function handleStock(e){
    setProduct({
        Name:product.Name,
        Price: product.Price,
        City:product.City,
        Stock:e.target.checked
    })

}

function handleRegister(){
    setNewProduct(product);
}

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h2>Register Product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={hanleName} className="form-control"/></dd>
                        <dt>Price</dt>
                        <dd><input type="text" onChange={handlePrice} className="form-control"/></dd>
                        <dt>City</dt>
                        <dd>
                            <select onChange={handleCity} className="form-select">
                                <option>Delhi</option>
                                <option>HYD</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input onChange={handleStock} className="form-check-input" type="checkbox" /> Available
                        </dd>
                    </dl>
                    <button onClick={handleRegister} className="btn btn-primery w-10">Register</button>

                </div>
                <div className="col-9">
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{newProduct.Name}</dd>
                        <dt>Price</dt>
                        <dd>{newProduct.Price}</dd>
                        <dt>City</dt>
                        <dd>{newProduct.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(newProduct.Stock==true)? "Available" : "NotAvailable"}</dd>
                    </dl>


                </div>
            </div>
        </div>
    )
}