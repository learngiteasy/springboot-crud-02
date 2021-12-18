import axios from 'axios';
import React, { Component } from 'react'

export default class CreateEmployee extends Component {
    constructor(props){
        super(props);
        this.state={
            empName:"",
            empEmail:"",
            empPhone:"",
            gender:""
        }
        
        this.handleName=this.handleName.bind(this);
        this.handleEmail=this.handleEmail.bind(this);
        this.handlePhone=this.handlePhone.bind(this);
        this.handleGender=this.handleGender.bind(this);
      
    }
 handleName=(event)=>{
     event.preventDefault();
   this.setState({empName:event.target.value});   
 }

 handleEmail=(event)=>{
    event.preventDefault();
  this.setState({empEmail:event.target.value});   
}
handlePhone=(event)=>{
    event.preventDefault();
  this.setState({empPhone:event.target.value});   
}
handleGender=(event)=>{
    event.preventDefault();
  this.setState({gender:event.target.value});   
}
saveEmployee=(event)=>{
    event.preventDefault();
    let employee={empName:this.state.empName,empEmail:this.state.empEmail,empPhone:this.state.empPhone,gender:this.state.gender}
  
    axios.post("http://localhost:9005/api/v1/saveemployee",employee).then((res)=>{
    
        this.props.history.push("/employees");
    });
}
cancle=()=>{
    this.props.history.push("/employees")
}
    render() {

        return (
            <div>
                <form>
                   Employee Name: <input type="text" name="empName" value={this.state.empName} onChange={this.handleName} placeholder='type name here' /> <br />
                       
                   Employee Email: <input type="text" name="empEmail" value={this.state.empEmail} onChange={this.handleEmail} placeholder='type name here' /> <br />
 
                   Employee Phone: <input type="text"  name="empPhone" value={this.state.empPhone} onChange={this.handlePhone} placeholder='type phone here' /> <br />
              
                  Employee Gender: <input type="text" name="gender" value={this.state.gender} onChange={this.handleGender} placeholder='type gender here' /> <br />
                 <button onClick={this.saveEmployee}>ADD EMPLOYEE</button>
              <button onClick={this.cancle}>CANCLE</button>
               </form>
                
            </div>
        )
    }
}
