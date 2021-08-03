package com.example.demo.controller;

import com.example.demo.model.Category;
import com.example.demo.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/category")
    public List<Category> get() {
        //System.out.println("LOG => GET all");
        return categoryService.getAllCategories();
    }

    @GetMapping("/category/{id}")
    public Category getById(@PathVariable("id") int id) {
        System.out.println("LOG => GET aby ID: " + id);
        return categoryService.getCategoryById(id);
    }
}

