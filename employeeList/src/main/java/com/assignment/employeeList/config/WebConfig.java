package com.assignment.employeeList.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Apply CORS configuration to all endpoints under /api
                .allowedOrigins("*")     // Allow requests from any origin
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow specified methods
                .allowedHeaders("*");    // Allow all headers
    }
}

