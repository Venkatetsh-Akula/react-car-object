package org.jsp.car.exception;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class NoCarFoundException extends RuntimeException{
	
	private String message;
	public NoCarFoundException() {
		super("No Car Details On The Search");
	}
	public NoCarFoundException(String message) {
		this.message=message;
	}
	@Override
	public String toString() {
		return this.message;
	}
}
