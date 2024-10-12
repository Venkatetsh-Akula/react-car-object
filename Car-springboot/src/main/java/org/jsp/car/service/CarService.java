package org.jsp.car.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.jsp.car.entity.Car;
import org.jsp.car.entity.Login;
import org.jsp.car.exception.InProperDetails;
import org.jsp.car.exception.InvalidCredentialsException;
import org.jsp.car.exception.NoCarFoundException;
import org.jsp.car.interfacedao.CarDaoInteface;
import org.jsp.car.interfaceservice.CarInterfaceService;
import org.jsp.car.responsestructure.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CarService implements CarInterfaceService{
	
	@Autowired
	private CarDaoInteface cardao;

	@Override
	public List<Car> getAllCarDetails() {
		return cardao.findAllCarDao();
	}

	@Override
	public Car getCarByIdService(int id) {
		Optional<Car> car=cardao.findCarById(id);
		if(car.isEmpty()) {
			throw NoCarFoundException.builder().message("No Cars Found On The List").build();
		}else {
			return car.get();
		}
	}

	@Override
	public Car saveCarDetailsService(Car car) {
		if(car==null) {
			throw InProperDetails.builder().message("InValid Details").build();
		}else {
			cardao.saveCar(car);
			return car;
		}
	}

	@Override
	public Car deleteCarDetailsService(int id) {
		Optional<Car> car=cardao.findCarById(id);
		if(car.isPresent()) {
			cardao.deleteCarById(id);
			return car.get();
		}else {
			throw NoCarFoundException.builder().message("No Cars Found On The List").build();
		}
	}

	@Override
	public Car updateCarDetailsService(int id, Car car) {
		Optional<Car> uc=cardao.findCarById(id);
		if(uc.isPresent()) {
			cardao.saveCar(car);
			return uc.get();
		}
		else {
			throw NoCarFoundException.builder().message("No Cars Found On The List").build();
		}
	}

	@Override
	public List<Car> filterCarByDate(Date deliveryDate) {
		Optional<List<Car>> licar=cardao.findCarDeliveryDate(deliveryDate);
		if(licar.isEmpty()) {
			throw NoCarFoundException.builder().message("No Cars Found On The List").build();
		}else {
			return licar.get();
		}
	}

	@Override
	public boolean checkLoginService(Login login) {
		Optional<Login> log=cardao.checkLoginDao(login.getEmail(),login.getPassword());
		if(log.isPresent()) {
			ResponseEntity.status(HttpStatus.OK.value()).body(ResponseStructure.builder().httpcode(HttpStatus.OK.value())
					.message("User Email And Password Match's").body(log.get()).build());
			return true;
		}else {
			return false;
			//throw InvalidCredentialsException.builder().message("Email or Password is wrong").build();
		}
	}

	@Override
	public boolean createLoginAccount(Login login) {
		Optional<Login> lg=cardao.checkLoginDao(login.getEmail(), login.getPassword());
		if(login.getEmail()!=null && login.getPassword()!=null && lg.isEmpty()) {
			Login log=cardao.createLoginAccount(login);
			ResponseEntity.status(HttpStatus.OK.value()).body(ResponseStructure.builder().httpcode(HttpStatus.OK.value())
					.message("Account Created").body(log).build());
			return true;
		}else {
			return false;
			//throw InvalidCredentialsException.builder().message("Either Email or Password is Wrong").build();
		}
	}

	
//	@Override
//	public ResponseEntity<?> getAllCarDetails() {
//		List<Car> li=cardao.findAllCarDao();
//		if(li.size()==0) {
//			throw NoCarFoundException.builder().message("No Cars Found On The List").build();
//		}
//		else {
//			return ResponseEntity.status(HttpStatus.OK.value()).body(ResponseStructure.builder().httpcode(HttpStatus.OK.value())
//					.message("This Car Are Found").body(li).build());
//		}
//	}
//	
//
//	@Override
//	public ResponseEntity<?> getDetailsById(int id) {
//		Optional<Car> car=cardao.findCarById(id);
//		if(car.isEmpty()) {
//			throw NoCarFoundException.builder().message("No Cars Found On The List").build();
//		}else {
//			return ResponseEntity.status(HttpStatus.OK.value()).body(ResponseStructure.builder().httpcode(HttpStatus.OK.value())
//					.message("Car Found Based on id").body(car.get()).build());
//		}
//	}
//
//	@Override
//	public ResponseEntity<?> saveCarInterface(Car car) {
//		if(car==null) {
//			throw InProperDetails.builder().message("InValid Details").build();
//		}
//		else {
//			Car scar=cardao.saveCar(car);
//			return ResponseEntity.status(HttpStatus.OK.value()).body(ResponseStructure.builder().httpcode(HttpStatus.OK.value())
//					.message("Car Found").body(scar).build());
//		}
//	}
//
//	@Override
//	public ResponseEntity<?> deleteCarById(int id) {
//		Optional<Car> car=cardao.findCarById(id);
//		if(car.isEmpty()) {
//			throw NoCarFoundException.builder().message("No Cars Found On The List").build();
//		}else {
//			cardao.deleteCarById(id);
//			return ResponseEntity.status(HttpStatus.OK.value()).body(ResponseStructure.builder().httpcode(HttpStatus.OK.value())
//					.message("car Deleted").body(car.get()).build());
//		}
//	}
//
//	@Override
//	public ResponseEntity<?> updateCarDetails(Car car) {
//		if(car==null) {
//			throw InProperDetails.builder().message("InValid Details").build();
//		}
//		else {
//			Car scar=cardao.saveCar(car);
//			return ResponseEntity.status(HttpStatus.OK.value()).body(ResponseStructure.builder().httpcode(HttpStatus.OK.value())
//					.message("Car Updated").body(scar).build());
//		}
//	}

}
