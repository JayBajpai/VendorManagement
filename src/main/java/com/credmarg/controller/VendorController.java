package com.credmarg.controller;

import com.credmarg.entity.Vendor;
import com.credmarg.service.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vendors")
@CrossOrigin(origins = "http://localhost:4200")
public class VendorController {

    @Autowired
    private VendorService vendorService;

    @PostMapping("/addVendor")
    public ResponseEntity<?> createVendor(@RequestBody Vendor vendor) {
        try {
            Vendor createdVendor = vendorService.createVendor(vendor);
            return ResponseEntity.ok(createdVendor);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while creating vendor: " + e.getMessage());
        }
    }

    @GetMapping("/getAllVendors")
    public ResponseEntity<?> getAllVendors() {
        try {
            List<Vendor> vendors = vendorService.getAllVendors();
            return ResponseEntity.ok(vendors);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while fetching vendors: " + e.getMessage());
        }
    }
}
