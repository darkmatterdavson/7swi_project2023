package cz.brioh.backend;

import cz.brioh.backend.controller.UserController;
import cz.brioh.backend.model.Login;
import cz.brioh.backend.model.User;
import cz.brioh.backend.repository.UserRepository;
import cz.brioh.backend.service.UserService;
import cz.brioh.backend.service.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
class BackendApplicationTests {

	@Autowired
	private UserRepository userRepository;

	@BeforeEach
	void init(){
		/*User user = new User();
		user.setPassword("janpw");
		user.setEmail("jan@gmail.com");
		user.setName("jan");
		user.setAdmin(true);
		userRepository.save(user);*/
	}

	/*@Test
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
	}*/

	@Test
	void getUserByEmailAndPasswordTest(){
		String email = "jan@gmail.com";
		User testUser = userRepository.findByEmail(email);
		assertEquals(email, testUser.getEmail());
	}

}
