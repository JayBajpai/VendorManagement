package com.credmarg.controller;

import com.credmarg.entity.Email;
import com.credmarg.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/emails")
@CrossOrigin(origins = "http://localhost:4200")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/sendEmail")
    public ResponseEntity<?> sendEmail(@RequestBody Email email) {
        try {
            emailService.sendEmail(email.getRecipient(), email.getSubject(), email.getBody());
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while sending email: " + e.getMessage());
        }
    }

    @GetMapping("/getAllEmails")
    public ResponseEntity<?> getAllEmails() {
        try {
            List<Email> emails = emailService.getAllEmails();
            return ResponseEntity.ok(emails);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while fetching emails: " + e.getMessage());
        }
    }
}
