package org.jsp.car.entity;

import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.annotation.Generated;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Car {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "Company",nullable = false)
	private String company;
	@Column(name="Phone_No",nullable=false)
	private long phone;
	//@OneToMany(cascade = CascadeType.ALL)
//	@Column(name="DeliveryLocation",nullable=false)
//	private String location;
	
	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	@Column(name="DeliveryLocation")
	private List<Location> delivery;
	
	
	@Column(name="TotalPrice",nullable=false)
	private double price;
	@DateTimeFormat(pattern = "yyyy-MM-dd") 
	@Column(name="BookingDate",nullable=false)
	@Temporal(TemporalType.DATE)
	private Date bookingDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd") 
	@Column(name="DeliveryDate",nullable = false)
	@Temporal(TemporalType.DATE)
	private Date deliveryDate;
}
