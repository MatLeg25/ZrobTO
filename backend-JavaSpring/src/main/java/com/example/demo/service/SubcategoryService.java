package com.example.demo.service;

import com.example.demo.model.Offer;
import com.example.demo.model.Subcategory;
import com.example.demo.repository.SubcategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class SubcategoryService {

    private final SubcategoryRepository subcategoryRepository;

    @Autowired
    public SubcategoryService(SubcategoryRepository subcategoryRepository) {
        this.subcategoryRepository = subcategoryRepository;
    }

    public List<Subcategory> getAllSubcategories() {
        return subcategoryRepository.findAll();
    }

    public Subcategory getSubcategoryById(int id) {
        return this.subcategoryRepository.getById(id);
    }

    public List<Subcategory> getSubcategoryByCategoryId(int categoryId) {
        return this.subcategoryRepository.findAllByCategory_Id(categoryId);
    }
}
