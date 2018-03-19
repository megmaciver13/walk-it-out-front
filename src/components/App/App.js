import React, { Component } from 'react'
import {
  Route,
  Switch
} from "react-router-dom"
import NavBar from '../NavBar/NavBar'
import DogPreviewList from '../DogPreviewList/DogPreviewList'
import SignUpForm from '../SignUpForm/SignUpForm'
import LogInForm from '../LogInForm/LogInForm'
import Profile from '../Profile/Profile'
import './App.css'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="body">
          <Switch>
          <Route path="/signup"
            render={(props) => {
              return(
                <SignUpForm {...props} />
              )
            }}
          />
          <Route path="/login"
            render={(props) => {
              return(
                <LogInForm {...props} />
              )
            }}
          />
          <Route path="/profile"
            render={(props) => {
              return(
                <Profile user={this.state} />
              )
            }}
          />
          <Route 
            path="/" 
            render={() => {
              return(
                <DogPreviewList />
              )
            }}
          />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
