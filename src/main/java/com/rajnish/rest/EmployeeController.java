package com.rajnish.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.rajnish.model.*;
import com.rajnish.services.EmployeeServices;

@Controller
@RequestMapping("/api/v1")
@CrossOrigin
public class EmployeeController {

	@Autowired
	private EmployeeServices employeeServices;
	
	
	  @RequestMapping("/")
	  @ResponseBody
	  public List<Employee> showEmployeeDetails(){
	        return this.employeeServices.getAllEmployee();
	  }
	  
	 @PostMapping("/saveemployee")
	 @ResponseBody
	 public String saveEmployee(@RequestBody Employee employee) {
		// System.out.println(employee);
		 return this.employeeServices.saveEmployee(employee);
	 }
	 
	  
		 @GetMapping("/employeebyid/{id}")
		 @ResponseBody
		 public Employee employeeById(@PathVariable Integer id) {
			 //System.out.println(employee);
			 return this.employeeServices.searchEmployeeById(id);
		 }
		 
		 @DeleteMapping("/deletebyid/{id}")
		 @ResponseBody
		 public String deleteById(@PathVariable Integer id) {
			System.out.println(id+"   ******************************************************");
			return this.employeeServices.deleteEmployeeById(id);
			
		 }
}
