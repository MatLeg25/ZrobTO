package com.example.demo.controller;

import com.example.demo.model.Offer;
import com.example.demo.model.Subcategory;
import com.example.demo.service.SubcategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SubcategoryController {

    private final SubcategoryService subcategoryService;

    @Autowired
    public SubcategoryController(SubcategoryService subcategoryService) {
        this.subcategoryService = subcategoryService;
    }

    @GetMapping("/subcategory")
    public List<Subcategory> get() {
        return subcategoryService.getAllSubcategories();
    }

    @GetMapping("/subcategory/{id}") //http://localhost:8080/subcategory/7
    public Subcategory getById(@PathVariable("id") int id) {
        return subcategoryService.getSubcategoryById(id);
    }

    @GetMapping("/subcategory/category") //http://localhost:8080/subcategory/category?categoryId=1
    public List<Subcategory> getByCategoryId(@RequestParam("categoryId") int categoryId) {
        return subcategoryService.getSubcategoryByCategoryId(categoryId);
    }

}

