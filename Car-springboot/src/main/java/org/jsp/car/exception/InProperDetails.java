package org.jsp.car.exception;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class InProperDetails extends RuntimeException{
	private String message;
	public InProperDetails(){
		super("Invalid Details Given");
	}
	public InProperDetails(String message) {
		this.message=message;
	}
	@Override
	public String toString() {
		return this.message;
	}
}
