package org.jsp.car.interfaceservice;

import java.util.Date;
import java.util.List;

import org.jsp.car.entity.Car;
import org.jsp.car.entity.FromTo;
import org.jsp.car.entity.Login;
import org.springframework.http.ResponseEntity;

public interface CarInterfaceService {

	List<Car> getAllCarDetails();

	Car getCarByIdService(int id);

	Car saveCarDetailsService(Car car);

	Car deleteCarDetailsService(int id);

	Car updateCarDetailsService(int id, Car car);

	List<Car> filterCarByDate(Date deliveryDate);

	boolean checkLoginService(Login login);

	boolean createLoginAccount(Login login);

	List<FromTo> getLocation();

	boolean saveFromTo(FromTo fromtoobj);

	boolean deleteFromTo(int id);

	boolean updateFromTo(int id, FromTo fromtoobj);

	
}
