//package com.credmarg.config;
//
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class SecurityConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http.csrf(csrf-> csrf.disable())
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers("/employees/addEmployee").authenticated() // Allow authenticated users for adding employees
//                        .requestMatchers("/employees/**", "/vendors/**", "/emails/**") // Other paths require ADMIN role
//                        .hasRole("ADMIN")
//                        .anyRequest().authenticated());
//
//        return http.build();
//    }
//
//    @Bean
//    public UserDetailsService userDetailsService() {
//        InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
//        manager.createUser(User.withDefaultPasswordEncoder()
//                .username("Jay")
//                .password("Jay123@@")
//                .roles("ADMIN")
//                .build());
//        return manager;
//    }
//}
//
