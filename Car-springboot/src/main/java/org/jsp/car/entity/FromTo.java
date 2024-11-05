package org.jsp.car.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FromTo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ftid;
	@Column(nullable = false)
	private String name;
	@Column(nullable = false)
	private String city;
	@Column(nullable = false)
	private String iata_code;
	@Column(nullable = false)
	private String type;
	@Column(nullable = false)
	private double lat;
	@Column(nullable = false)
	private double lng;
}