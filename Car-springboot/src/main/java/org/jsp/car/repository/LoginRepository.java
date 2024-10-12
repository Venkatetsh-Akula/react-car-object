package org.jsp.car.repository;

import java.util.Optional;

import org.jsp.car.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LoginRepository extends JpaRepository<Login, Integer> {
	
	@Query("select log from Login log where log.email=:email and log.password=:password")
	Optional<Login> findByEmailAndPassword(String email, String password);
	

}
