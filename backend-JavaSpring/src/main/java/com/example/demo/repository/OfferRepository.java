package com.example.demo.repository;

import com.example.demo.model.OfferModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferRepository extends JpaRepository<OfferModel, Integer> {
}
