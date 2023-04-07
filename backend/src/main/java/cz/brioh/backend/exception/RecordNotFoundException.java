package cz.brioh.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class RecordNotFoundException extends ResponseStatusException {
    public RecordNotFoundException(String statusText){
        super(HttpStatus.NOT_FOUND, statusText);
    }
}
