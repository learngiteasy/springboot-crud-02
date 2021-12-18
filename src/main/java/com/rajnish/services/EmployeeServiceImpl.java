package com.rajnish.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rajnish.model.Employee;
import com.rajnish.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeServices {

	@Autowired
	private EmployeeRepository employeeRepo;
	
	
	@Override
	public List<Employee> getAllEmployee() {
		// TODO Auto-generated method stub
		List<Employee> findAll = this.employeeRepo.findAll();
		System.out.println(findAll);
		return findAll;
		}
	
	
	
	
	

	@Override
	public String saveEmployee(Employee employee) {
		
	   this.employeeRepo.save(employee);
	  return "Data Saved";
	}
	
	
	
	
	

	@Override
	public Employee searchEmployeeById(Integer id) {
		Optional<Employee> findById = this.employeeRepo.findById(id);
		Employee ob=findById.get();
		return ob;
	}

	
	
	
	
	@Override
	public String deleteEmployeeById(Integer id) {
		// TODO Auto-generated method stub
		this.employeeRepo.deleteById(id);
		return "Data deleted";
	}

	
	
	
	
}
