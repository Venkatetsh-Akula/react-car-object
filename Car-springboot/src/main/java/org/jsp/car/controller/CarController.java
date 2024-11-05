package org.jsp.car.controller;

import java.util.Date;
import java.util.List;

import org.jsp.car.entity.Car;
import org.jsp.car.entity.FromTo;
import org.jsp.car.entity.Login;
import org.jsp.car.interfaceservice.CarInterfaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/car")
@CrossOrigin(value = "http://localhost:3000")
public class CarController {
	
	@Autowired
	private CarInterfaceService iservice;
	
	@GetMapping
	public List<Car> getAllCar(){
		return iservice.getAllCarDetails();
	}
	
	@GetMapping(value = "/{id}")
	public Car getCarById(@PathVariable int id) {
		return iservice.getCarByIdService(id);
	}
	
	@GetMapping(value="filter/{deliveryDate}")
	public List<Car> filterDataBasedOnDelivery(@PathVariable @DateTimeFormat(pattern="yyyy-MM-dd") Date deliveryDate) {
		return iservice.filterCarByDate(deliveryDate);
	}
	@PostMapping
	public Car saveCarDetails(@RequestBody Car car) {
		return iservice.saveCarDetailsService(car);
	}
	
	@DeleteMapping(value="/{id}")
	public Car deleteCarDetails(@PathVariable int id) {
		return iservice.deleteCarDetailsService(id);
	}
	
	@PutMapping(value="/{id}")
	public Car updateCarDetails(@PathVariable int id,@RequestBody Car car) {
		return iservice.updateCarDetailsService(id,car);
	}
	
	
	
	//login check
	@PostMapping(value="/login")
	public boolean logincheck(@RequestBody Login login){
		return iservice.checkLoginService(login);
	}
	@PostMapping(value="/signup")
	public boolean createAccount(@RequestBody Login log){
		return iservice.createLoginAccount(log);
	}
	
	//from-to
	@GetMapping(value="/fromto")
	public List<FromTo> fromToController(){
		return iservice.getLocation();
	}
	
	@PostMapping(value="/fromto")
	public boolean saveFromToData(@RequestBody FromTo fromtoobj) {
		return iservice.saveFromTo(fromtoobj);
	}
	@DeleteMapping(value="/fromto/{id}")
	public boolean deleteFromToLocation(@PathVariable int id) {
		return iservice.deleteFromTo(id);
	}
	@PutMapping(value="/fromto/{id}")
	public boolean updateLocation(@PathVariable int id,@RequestBody FromTo fromtoobj) {
		return iservice.updateFromTo(id,fromtoobj);
	}
}
