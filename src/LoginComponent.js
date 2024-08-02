
import { useState } from "react";
export default function  LoginComponent(){

    const[theam, setTheam] = useState({});

    function handleTheamChange(e){
        if(e.target.checked) {
            setTheam({
                backgroundColor: 'black',
                color:'white',
                width: '250px',
                padding: '10px'
                        })
        }else{
            setTheam({
                backgroundColor: 'white',
                color:'black',
                width: '250px',
                padding: '10px'
            })

        }
        
    }



    return(
        <div className="container-fluid">
            <div style={theam}>
           <div>
           <h2>User Login</h2>
            <div className="form-switch">
                <input onChange={handleTheamChange} className="form-check-input" type="checkbox"/>Dark Theam

            </div>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text"/></dd>
                <dt>Password</dt>
                <dd><input type="password"/></dd>

            </dl>
            <button>Login</button>
           </div>
           </div>
        </div>
    )
}