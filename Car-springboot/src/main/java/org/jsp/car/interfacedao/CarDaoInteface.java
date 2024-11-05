package org.jsp.car.interfacedao;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.jsp.car.entity.Car;
import org.jsp.car.entity.FromTo;
import org.jsp.car.entity.Login;

public interface CarDaoInteface {

	List<Car> findAllCarDao();

	Optional<Car> findCarById(int id);

	Car saveCar(Car car);

	void deleteCarById(int id);

	Optional<List<Car>> findCarDeliveryDate(Date deliveryDate);

	Optional<Login> checkLoginDao(String email, String password);

	Login createLoginAccount(Login login);
	
	//from-to

	List<FromTo> getFromToList();

	FromTo saveFromTo(FromTo fromtoobj);

	Optional<FromTo> findFromToById(int id);

	void deleteFromTOById(int id);

}
