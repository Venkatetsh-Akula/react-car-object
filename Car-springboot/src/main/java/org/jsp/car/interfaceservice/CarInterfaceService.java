package org.jsp.car.interfaceservice;

import java.util.Date;
import java.util.List;

import org.jsp.car.entity.Car;
import org.springframework.http.ResponseEntity;

public interface CarInterfaceService {

	List<Car> getAllCarDetails();

	Car getCarByIdService(int id);

	Car saveCarDetailsService(Car car);

	Car deleteCarDetailsService(int id);

	Car updateCarDetailsService(int id, Car car);

	List<Car> filterCarByDate(Date deliveryDate);

	
}
