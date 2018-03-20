import React, { Component } from 'react'

import './LogOut.css'

class LogOut extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h2>Log Out</h2>

                <form>
                    <input value="Log Out" type="submit" onClick={this.props.handleLogOut} />
                </form>
            </div>
        )
    }
}

export default LogOut