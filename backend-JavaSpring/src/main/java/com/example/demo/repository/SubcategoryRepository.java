package com.example.demo.repository;

import com.example.demo.model.Subcategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Repository
@Transactional
public interface SubcategoryRepository extends JpaRepository<Subcategory, Integer> {
}
