import React, { Component } from 'react'
import axios from 'axios'

import DogPreview from '../DogPreview/DogPreview'
import './DogPreviewList.css'

class DogPreviewList extends Component {
    constructor() {
        super()

        this.state = {
            dogs: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/dogs')
            .then(response => {
                this.setState({
                    dogs: response.data
                })
            })
    }

    render() {
        console.log(this.state.dogs)
        var showDogs = this.state.dogs.map((dog, i) => {
            return(
                <div key={i}>
                    <DogPreview info={dog} />
                </div>
            )
        })
        return(
            <div>
                {showDogs}
            </div>
        )
    }
}

export default DogPreviewList