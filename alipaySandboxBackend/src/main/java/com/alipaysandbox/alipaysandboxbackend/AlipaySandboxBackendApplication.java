package com.alipaysandbox.alipaysandboxbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class AlipaySandboxBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(AlipaySandboxBackendApplication.class, args);
    }

}
