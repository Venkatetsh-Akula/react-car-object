package org.jsp.car.dao;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.jsp.car.entity.Car;
import org.jsp.car.entity.FromTo;
import org.jsp.car.entity.Login;
import org.jsp.car.interfacedao.CarDaoInteface;
import org.jsp.car.repository.CarRepository;
import org.jsp.car.repository.FromToRepository;
import org.jsp.car.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CarDao implements CarDaoInteface{
	@Autowired
	private CarRepository repo;
	
	@Autowired
	private LoginRepository loginrepo;
	
	@Autowired
	private FromToRepository fromtorepo;

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

	@Override
	public Optional<Login> checkLoginDao(String email, String password) {
		return loginrepo.findByEmailAndPassword(email,password);
	}

	@Override
	public Login createLoginAccount(Login login) {
		return loginrepo.save(login);
	}
	
	//from-to

	@Override
	public List<FromTo> getFromToList() {
		return fromtorepo.findAll();
	}

	@Override
	public FromTo saveFromTo(FromTo fromtoobj) {
		return fromtorepo.save(fromtoobj);
	}

	@Override
	public Optional<FromTo> findFromToById(int id) {
		return fromtorepo.findById(id);
	}

	@Override
	public void deleteFromTOById(int id) {
		fromtorepo.deleteById(id);
	}
	

}
