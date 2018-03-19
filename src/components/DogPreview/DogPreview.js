import React, { Component } from 'react'
import './DogPreview.css'

class DogPreview extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dog: this.props.info
        }
    }

    render() {
        return (
            <div className="dog-preview">
                <img src={this.state.dog.imageUrl} alt={this.state.dog.name} className="dog-image" />
                <h3>{this.state.dog.name}</h3>
            </div>
        )
    }
}

export default DogPreview