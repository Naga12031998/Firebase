import React from 'react'
import fire from './config/Fire';

class Login extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            email : '',
            password : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.login = this.login.bind(this)
        this.signup = this.signup.bind(this)
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {

        }).catch((error) => {
            console.log(error)
        })
    }

    signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            
        }).then((u) => {console.log(u)})
        .catch((error) => {
            console.log(error)
        })
    }


    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>email</label>
                        <input value={this.state.email} name="email" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>password</label>
                        <input value={this.state.password} name="password" onChange={this.handleChange} type="password"></input>
                    </div>
                    <button type="submit" onClick={this.login}>Login</button>
                    <button onClick={this.signup}>Signup</button>
                </form>
            </div>
        )
    }
}

export default Login;