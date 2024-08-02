import React from "react";

class SuccessComponent extends React.Component{
    componentDidMount(){
        alert('Success component Will render');
    }
    componentWillUnmount(){
        alert('Success component will UnMount');
    }

    render(){
        return(
            <div>
                <h2>Login Successfully...</h2>
            </div>
        )
    }
}

class ErrorComponent extends React.Component{

    componentDidMount(){
        alert('Error Component will render');
    }
    componentWillUnmount(){
        alert('Error Component Will Unmount');
    }

    render(){
        return(
            <div>
                <h2>Login Failed..!invalid Credentials</h2>
            </div>
        )
    }
}

export default class PracticeComponent extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            userDetails:{
                UserName : 'Bharath',
                Password :'Bharath@123'
            },
            formDetails : {
                UserName :'',
                Password : ''
            },
            result:''

        }
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);

    }

    handleUserName(event){
        this.setState({
            formDetails:{
                UserName: event.target.value,
                Password: this.state.formDetails.Password
            }
        })
    }

    handlePassword(event){
        this.setState({
            formDetails:{
                UserName:this.state.formDetails.UserName,
                Password: event.target.value
            }
        })
    }

    handleLoginClick(){
        if(this.state.userDetails.UserName == this.state.formDetails.UserName && this.state.userDetails.Password == this.state.formDetails.Password){
            this.setState({
                result: <SuccessComponent/>
            })
        }else{
            this.setState({
                result: <ErrorComponent></ErrorComponent>
            })
        }
    }


    render(){
        return(
            <div className="container">
                <h2>Sign in</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input onChange={this.handleUserName} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input onChange={this.handlePassword} type="text"/></dd>
                </dl>
                <button onClick={this.handleLoginClick}>Login</button>
                <div>
                    {this.state.result}
                </div>
            </div>
        )
    }
}