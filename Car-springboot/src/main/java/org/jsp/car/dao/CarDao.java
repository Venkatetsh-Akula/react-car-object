package org.jsp.car.dao;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.jsp.car.entity.Car;
import org.jsp.car.interfacedao.CarDaoInteface;
import org.jsp.car.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CarDao implements CarDaoInteface{
	@Autowired
	private CarRepository repo;

	@Override
	public List<Car> findAllCarDao() {
		return repo.findAll();
	}

	@Override
	public Optional<Car> findCarById(int id) {
		return repo.findById(id);
	}

	@Override
	public Car saveCar(Car car) {
		return repo.save(car);
	}

	@Override
	public void deleteCarById(int id) {
		repo.deleteById(id);
	}

	@Override
	public Optional<List<Car>> findCarDeliveryDate(Date deliveryDate) {
		return repo.findCarDeliverydate(deliveryDate);
	}
	

}
