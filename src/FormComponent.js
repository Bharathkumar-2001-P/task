import { useState } from "react"

export default function FormComponent(){

    const [users] = useState([
        {UserId:'john'},
        {UserId:'john12'},
        {UserId:'david'},
        {UserId:'jhon_nit'}
    ]);

    const [userMsg, setUserMsg] = useState('');
    const [isUserValid, setUserValid] = useState(false);
    const [pwdMsg, setPwdMsg] =useState('');
    const [capsStatus, setCapsStatus] =useState(false);
    const [cityMsg, setCityMsg] = useState('');
    const [userDetails, setUserDetails] = useState({UserId:'',Password:'', City:''});

    function verifyUserId(e){
        for(var user of users){
            if(user.UserId==e.target.value){
                setUserMsg('User ID is Taken - Try Another');
                setUserValid(false);
                break;
            }
            else{
                setUserMsg('User Id Available');
                setUserValid(true);
            }
        }

    }

    function HideUserMsg(){
        setUserMsg('');
    }

    function verifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w[4,10]/)){
            setPwdMsg('Strong Password');
        }else{
            if(e.target.value.length<4){
                setPwdMsg('Poor Password');
            }else{
                setPwdMsg('Weak Password');
            }
        }

    }
    function HidePasswordMsg(){
        setPwdMsg('');
    }

    function verifyCaps(e){
        if(e.keyCode>=65 && e.keyCode<=90 || e.which>=65 && e.which<=90){
            setCapsStatus(true);
        } else {
            setCapsStatus(false);
        }
    }

    function verifyCity(e){
        if(e.target.value=="notcity"){
            setCityMsg('please Select a city');

        }else{
            setCityMsg('');
        }
    }

    function HandleUserChange(e){
        setUserDetails({
            UserId:e.target.value,
            Password:userDetails.Password,
            City: userDetails.City
        })
    }
    function HandlePasswordChange(e){
        setUserDetails({
            UserId:userDetails.UserId,
            Password:e.target.value,
            City: userDetails.City
        })
    }

    function HandleCityChange(e){
        setUserDetails({
            UserId:userDetails.UserId,
            Password:userDetails.Password,
            City: e.target.City
        })
    }
    function RegisterClick(){
        alert(JSON.stringify(userDetails));
    }


    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onChange={HandleUserChange} onBlur={HideUserMsg} onKeyUp={verifyUserId}/></dd>
                <dd className={(isUserValid==true)? 'text-success':'text-danger'}>{userMsg}</dd>
                <dt>Password</dt>
                <dd>
                    <input type="password" onChange={HandlePasswordChange} onKeyPress={verifyCaps} onBlur={HidePasswordMsg} onKeyUp={verifyPassword}/>
                </dd>
                <dd>{pwdMsg}</dd>
                <dd className={(capsStatus==true)? 'd-block':'d-none'}>
                    <span className="text-warning"><span className="bi bi-exclamation-triangle"></span>Caps ON</span>
                </dd>
                <dt>Your City</dt>
                <dd>
                    <select   onChange={verifyCity}>
                        <option value="notcity">Select Your City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="HYD">HYD</option>

                    </select>
                </dd>
                <dd className="text-danger">{cityMsg}</dd>
            </dl>
            <button onClick={RegisterClick}>Register</button>


        </div>
    )
}