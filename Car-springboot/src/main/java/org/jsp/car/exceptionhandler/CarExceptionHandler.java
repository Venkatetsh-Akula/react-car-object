package org.jsp.car.exceptionhandler;

import org.jsp.car.exception.InProperDetails;
import org.jsp.car.exception.InvalidCredentialsException;
import org.jsp.car.exception.NoCarFoundException;
import org.jsp.car.responsestructure.ResponseStructure;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CarExceptionHandler {
	
	@ExceptionHandler(NoCarFoundException.class)
	public ResponseEntity<?> nocarFoundMethod(NoCarFoundException e){
		return ResponseEntity.status(HttpStatus.NOT_FOUND.value()).body(ResponseStructure.builder().httpcode(HttpStatus.NOT_FOUND.value())
				.message("No car Found").body(e.toString()).build());
	}
	@ExceptionHandler(InProperDetails.class)
	public ResponseEntity<?> inProperDatails(InProperDetails e){
		return ResponseEntity.status(HttpStatus.NOT_FOUND.value()).body(ResponseStructure.builder().httpcode(HttpStatus.NOT_FOUND.value())
				.message("In Proper Details").body(e.toString()).build());
	}
	@ExceptionHandler(InvalidCredentialsException.class)
	public ResponseEntity<?> invalidCredinatails(InvalidCredentialsException e){
		return ResponseEntity.status(HttpStatus.NOT_FOUND.value()).body(ResponseStructure.builder().httpcode(HttpStatus.NOT_FOUND.value())
				.message("Invalid User Id Or Password").body(e.getMessage()).build());
	}
}
