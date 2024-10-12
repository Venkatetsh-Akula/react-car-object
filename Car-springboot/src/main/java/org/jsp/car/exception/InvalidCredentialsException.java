package org.jsp.car.exception;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class InvalidCredentialsException extends RuntimeException{
	public String message;
	public InvalidCredentialsException() {
		super("Email Or password is wrong");
	}
	public InvalidCredentialsException(String message) {
		this.message=message;
	}
	@Override
	public String toString() {
		return this.message;
	}
}
