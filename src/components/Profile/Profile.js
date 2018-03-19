import React, { Component } from 'react'
import DogShowList from '../DogShowList/DogShowList';

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: this.props.email
        }
    }

    render() {
        return(
            <div>
                <h1>Profile</h1>
                {this.state.email ? <h2>{this.state.email}</h2> : '' }
                <DogShowList />
            </div>
        )
    }
}

export default Profile