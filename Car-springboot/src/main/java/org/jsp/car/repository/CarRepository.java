package org.jsp.car.repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.jsp.car.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CarRepository extends JpaRepository<Car, Integer>{

	
	@Query("select c from Car c where c.deliveryDate=:deliveryDate")
	Optional<List<Car>> findCarDeliverydate(Date deliveryDate);


}
