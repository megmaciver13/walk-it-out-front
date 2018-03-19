import React, { Component } from 'react'
import axios from 'axios'

import './SignUpForm.css'

class SignUpForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Sign Up</h2>

                <form method="post" action="/signup">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input class="form-control" type="text" name="email" />
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input class="form-control" type="text" name="password" />
                    </div>
                    <input value="Submit" type="submit" />
                </form>
            </div>
        )
    }
}

export default SignUpForm