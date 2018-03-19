import React, { Component } from 'react'
import axios from 'axios'

import './LogInForm.css'

class LogInForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleLogIn = this.handleLogIn.bind(this)
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogIn() {
        axios.post('http://localhost:3001/login', {
            email: this.state.user.email,
            password: this.state.user.password
        })
            .then(response => {
                console.log(response.data)
                localStorage.token = response.data.token
                this.props.history.push("/profile")
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h2>Log In</h2>

                <form method="post" action="/login">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" onChange={this.handleInput} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" onChange={this.handleInput} />
                    </div>
                    <input value="Submit" type="submit" onClick={this.handleLogIn} />
                </form>
            </div>
        )
    }
}

export default LogInForm