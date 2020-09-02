import React from 'react';
import axios from 'axios'
import './App.css';
import UserCard from './components/CardMaker'
import Followers from './components/Followers'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: {}
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/katnoelii')
      .then(res => {
        console.log('my data', res.data)
        this.setState({
          userData: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='App'>
        <h1>Github Friends</h1>
        <UserCard userData={this.state.userData}/>
        <Followers />
      </div>
      
    )
  }
}

export default App;