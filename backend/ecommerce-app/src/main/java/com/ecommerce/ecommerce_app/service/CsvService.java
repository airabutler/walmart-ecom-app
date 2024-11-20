package com.ecommerce.ecommerce_app.service;

import com.ecommerce.ecommerce_app.model.Product;
import com.ecommerce.ecommerce_app.repository.ProductRepository;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
public class CsvService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> parseCsv(MultipartFile file) throws Exception {
        List<Product> products = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()));
             CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT.withFirstRecordAsHeader())) {

            for (CSVRecord csvRecord : csvParser) {
                Product product = new Product(
                        csvRecord.get("name"),
                        new BigDecimal(csvRecord.get("price")),
                        csvRecord.get("category"),
                        csvRecord.get("description")
                );
                products.add(product);
            }

            // Save all products to the database
            productRepository.saveAll(products);
        }

        return products;
    }
}
