package com.rajnish.services;

import java.util.List;

import com.rajnish.model.Employee;

public interface EmployeeServices {

	public List<Employee> getAllEmployee();
    public String saveEmployee(Employee employee);
    public Employee searchEmployeeById(Integer id);   
    public String deleteEmployeeById(Integer id);
    
    
}
