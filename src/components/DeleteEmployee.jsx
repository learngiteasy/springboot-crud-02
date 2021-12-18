import React, { Component } from 'react'
import axios from 'axios'
export default class DeleteEmployee extends Component {
    constructor(props){
       super(props)
       this.state={
           id:this.props.match.params.id
       }
    }

    deleteEmployee=(event)=>{
       
        event.preventDefault();
        axios.get(`http://localhost:9005/api/v1/deletebyid/${this.state.id}`)
        .then((res)=>{
          this.props.history.push("/employees")
        })

    }
    render() {
        return (
            <div>
                <h1>DELETE</h1>
                <button onClick={this.deleteEmployee}>CONFIRM DELETION</button>
            </div>
        )
    }
}
