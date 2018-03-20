import React, { Component } from 'react'
// import axios from 'axios'

import './SignUpForm.css'

class SignUpForm extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     email: '',
        //     password: ''
        // }

        // this.handleInput = this.handleInput.bind(this)
        // this.handleSignUp = this.handleSignUp.bind(this)
    }

    // handleInput(e) {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // // move up to App.js
    // handleSignUp(e) {
    //     e.preventDefault()

    //     axios.post('http://localhost:3001/users/signup', {
    //         email: this.state.email,
    //         password: this.state.password
    //     })
    //         .then(response => {
    //             localStorage.token = response.data.token
    //             this.props.history.push("/")
    //             this.setState({
    //                 isLoggedIn: true
    //             })
    //         })
    //         .catch(err => console.log(err))
    // }

    render() {
        return (
            <div>
                <h2>Sign Up</h2>

                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" onChange={this.props.handleInput} />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" onChange={this.props.handleInput} />
                    </div>
                    <input value="Submit" type="submit" onClick={this.props.handleSignUp} />
                </form>
            </div>
        )
    }
}

export default SignUpForm