package com.example.demo;

import com.example.demo.security.model.ERole;
import com.example.demo.security.model.Role;
import com.example.demo.security.model.User;
import com.example.demo.security.repository.RoleRepository;
import com.example.demo.security.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
@RestController
public class DemoApplication {

    public static void main(String[] args) {

        SpringApplication.run(DemoApplication.class, args);
    }

//    @Bean
//    PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }



    //TODO manage INSERT role
    @Bean
    CommandLineRunner run(RoleRepository roleRepository, UserRepository userRepository) {
        return args -> {

            String PASSWORD = "$2a$10$04LRCrITKAnmxlGbD1ELdOavA/jODfHniRRHJvODVjv5ByNeXwICO"; //Bcrypted 123456

            Role roleUser = new Role(ERole.ROLE_USER);
            Role roleModerator = new Role(ERole.ROLE_MODERATOR);
            Role roleAdmin = new Role(ERole.ROLE_ADMIN);

            roleRepository.save(roleUser);
            roleRepository.save(roleModerator);
            roleRepository.save(roleAdmin);

            User user = new User("user", "user@zrobto.pl", PASSWORD);
            Set<Role> rolesUser = Set.<Role>of(roleUser);
            user.setRoles(rolesUser);
            userRepository.save(user);

            User moderator = new User("moderator", "moderator@zrobto.pl", PASSWORD);
            Set<Role> rolesMod = Set.<Role>of(roleUser, roleModerator);
            moderator.setRoles(rolesMod);
            userRepository.save(moderator);

            User admin = new User("admin","admin@zrobto.pl",PASSWORD);
            Set<Role> rolesAdmin = Set.<Role>of(roleUser, roleModerator, roleAdmin);
            admin.setRoles(rolesAdmin);
            userRepository.save(admin);

        };

    }

}
