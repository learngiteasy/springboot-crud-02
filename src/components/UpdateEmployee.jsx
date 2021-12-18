import axios from 'axios'
import React, { Component } from 'react'

export default class UpdateEmployee extends Component {
    constructor(props){
        super(props)
        this.state={
            error:"",
            empId:this.props.match.params.id,
            empName:"",
            empEmail:"",
            empPhone:"",
            gender:""

        }
    }
    handleEmail=(event)=>{
         event.preventDefault()
          this.setState({empEmail:event.target.value});
    }
    handleGender=(event)=>{
          event.preventDefault()
          this.setState({gender:event.target.value})
    }
   handleName=(event)=>{
          event.preventDefault()
          this.setState({empName:event.target.value})
   }
   handlePhone=(event)=>{
          event.preventDefault()
          this.setState({empPhone:event.target.value})
   }
    componentDidMount(){
        axios.get(`http://localhost:9005/api/v1/employeebyid/${this.state.empId}`).then((res)=>{

         this.setState({empName:res.data.empName,empEmail:res.data.empEmail,empPhone:res.data.empPhone,gender:res.data.gender})
        })
    }
    updateEmployee=(event)=>{

        event.preventDefault()
        let employee={empId:this.state.empId,empName:this.state.empName,empPhone:this.state.empPhone,gender:this.state.gender,empEmail:this.state.empEmail}
     
        axios.post("http://localhost:9005/api/v1/saveemployee",employee).then((res)=>{
         
         // this.props.history.push("/employees");
         this.state.error=res.data
         this.setState({error:res.data})
         alert( this.state.error)
        });
   }
   cancle=(event)=>{
       event.preventDefault()
       alert("asf")
    this.props.history.push("/employees");
   }
    render() {
        return (
            <div>
                <h1>Update Employee</h1>
                <form>
                   Employee Name: <input type="text" name="empName" value={this.state.empName} onChange={this.handleName} placeholder='type name here' /> <br />
                       
                   Employee Email: <input type="text" name="empEmail" value={this.state.empEmail} onChange={this.handleEmail} placeholder='type name here' /> <br />
 
                   Employee Phone: <input type="text"  name="empPhone" value={this.state.empPhone} onChange={this.handlePhone} placeholder='type phone here' /> <br />
              
                  Employee Gender: <input type="text" name="gender" value={this.state.gender} onChange={this.handleGender} placeholder='type gender here' /> <br />
                  <button onClick={this.updateEmployee}>UPDATE EMPLOYEE</button>
                   <button onClick={this.cancle}>CANCLE</button>
                    </form>
               <h1>{this.state.error}</h1>
            </div>
        )
    }
}
