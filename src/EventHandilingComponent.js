import { useState, useContext } from "react";

export default function EventHandilingComponent(){
    const [userName, setUserName] = useState('John');
    function handleUserName(e){
      setUserName(e.target.value);
    }

    return(
        <div className="container">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" value={userName} onChange={handleUserName}/></dd>
            </dl>
            <h3>Hello ! {userName}</h3>
        </div>
    )
}
