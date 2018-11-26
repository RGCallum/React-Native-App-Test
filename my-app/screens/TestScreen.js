import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class User extends Component {
  state = {
    users: [],
    newUser: {
      username: '',
      password: '',
      email: '',
      bio: '',
      image: '',
    }
  }

  handleChange = (event) => {
    const updatedNewUser = { ...this.state.newUser }

    updatedNewUser[event.target.name] = event.target.value
    this.setState({ newUser: updatedNewUser })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios.post('/api/users', this.state.newUser).then(res => {
      console.log(res.data)
      this.props.history.push(`/users/${res.data._id}`)
    })
  }

  getAllUsers = () => {
    axios.get('/api/users').then((res) => {
      this.setState({ users: res.data })
    })
  }

  componentDidMount() {
    this.getAllUsers()
  }

  render() {
    return (
      <div>

        <View>
            <h1>Sign-Up to be Featured</h1>
            <h3>   <form onSubmit={this.handleSubmit}>
              <br />

              <div>
                <label htmlFor="username">User Name: </label> <br />
                <input onChange={this.handleChange} value={this.state.newUser.username} type="text" name="username" />
              </div>
              <br />

              <div>
                <label htmlFor="password">Password: </label> <br />
                <input onChange={this.handleChange} value={this.state.newUser.password} type="password" name="password" />
              </div>
              <br />

              <div>
                <label htmlFor="email">Email: </label> <br />
                <input onChange={this.handleChange} value={this.state.newUser.email} type="text" name="email" />
              </div>
              <br />

              <div>
                <label htmlFor="bio">Bio: </label> <br />
                <input onChange={this.handleChange} value={this.state.newUser.bio} type="text" name="bio" />
              </div>
              <br />

              <div>
                <label htmlFor="image">Image: </label> <br />
                <input onChange={this.handleChange} value={this.state.newUser.image} type="text" name="image" />
              </div>

              <br />
              <button type="submit">Join</button>
            </form></h3>
        </View>
      </div>
    )
  }
}
export default User;