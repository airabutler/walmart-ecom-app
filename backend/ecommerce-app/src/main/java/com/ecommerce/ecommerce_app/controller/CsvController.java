package com.ecommerce.ecommerce_app.controller;

import com.ecommerce.ecommerce_app.model.Product;
import com.ecommerce.ecommerce_app.service.CsvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/csv")
@CrossOrigin(origins = "http://localhost:3000")
public class CsvController {

    @Autowired
    private CsvService csvService;

    @PostMapping("/upload")
    public ResponseEntity<List<Product>> uploadCsv(@RequestParam("file") MultipartFile file) {
        try {
            List<Product> products = csvService.parseCsv(file);
            return ResponseEntity.ok(products);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
