import React, { Component } from 'react'
import axios from "axios"
export default class HomeComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            employee:[]
        };
        this.addemployee=this.addemployee.bind(this);
    }
    componentDidMount(){
        axios.get("http://localhost:9005/api/v1/").then((res)=>
        {
           this.setState({employee:res.data});
           // alert(JSON.stringify(this.state.employee))
        })
    }
    addemployee(){
     
        this.props.history.push("/addemployee");
    }

  updateEmployee(id){
      alert(id)
    this.props.history.push(`/updateemployee/${id}`);
  }
  deleteEmployee(id){
      alert(id)
      this.props.history.push(`/deleteemployee/${id}`);
  }

  
    render() {
        return (
            <div>
                <h1>List Of Employee </h1>
           <button onClick={this.addemployee}>ADD EMPLOYEE</button>
              <table className="table table-bordered" border="2">
            <tr>
                <th>SNO</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Action</th>
            </tr>
  
            {
                this.state.employee.map((object,index)=>(
                    <tr key={object.empId}>
                        <td>{index+1}</td>
                        <td>{object.empName}</td>
                        <td>{object.empEmail}</td>
                        <td>{object.empPhone}</td>
                        <td>{object.gender}</td>
                        <td> 
                            <button onClick={()=>this.deleteEmployee(object.empId)}>DELETE</button>
                            <button onClick={()=>this.updateEmployee(object.empId)}>EDIT</button> </td>
                    </tr>
                ))
                
                }
            
            
           

        </table>
       
            </div>
        )
    }
}
