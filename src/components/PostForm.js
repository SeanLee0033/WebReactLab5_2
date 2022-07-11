import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        userId: '',
         album:''
      }
    }

    changeHandler =(e) => {
        this.setState({ [e.target.name]: e.target.value})
    } 
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/photos', this.state)
            .then (response=> {
                console.log(response)
            })
            .catch (error => {
                console.log(error)
            })
    }

    render() {
    const{userId,album} =this.state
        return (
            <div>
                <h2>Adding </h2>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Userid: </label>
                        <input type="text" name='userId' value={userId}
                        onChange={this.changeHandler}/>
                     </div>
                     <div>
                        <label>Album: </label>
                        <input type="text" name='album' value={album}
                        onChange={this.changeHandler}/>
                     </div>
                     <button type='submit'>Submit</button>
                     
                </form>
            </div>
        )
    }
}

export default PostForm