package cz.brioh.backend;

import cz.brioh.backend.repository.UserRepository;
import cz.brioh.backend.service.UserService;
import cz.brioh.backend.service.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class BackendApplicationTests {

	private UserRepository userRepository;
	private UserService userService;

	@BeforeEach
	void init(){
		userRepository = mock(UserRepository.class);
		userService = new UserServiceImpl(userRepository);
	}

	@Test
	void usernameAlreadyExists(){
		String name = "honza";
		when(userRepository.findByName(name)).thenReturn(true);
		boolean res = userService.usernameExists(name);
		assertTrue(res, "Username already exists!");
	}

	@Test
	void usernameDoesntExists(){
		String name = "mohamed5";
		when(userRepository.findByName(name)).thenReturn(false);
		boolean res = userService.usernameExists(name);
		assertFalse(res, "Username already exists!");
	}

}
