package com.example.demo.repository;

import com.example.demo.model.Offer;
import com.example.demo.model.Subcategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Repository
@Transactional
public interface OfferRepository extends JpaRepository<Offer, UUID> {

    List<Offer> findAllBySubcategoryId(Integer subcategoryID);

    List<Offer> findAllByPriceBetween(int minPrice, int maxPrice); //return WITH edge values

    List<Offer> findAllByOrderByPriceAsc();

    List<Offer> findAllByOrderByPriceDesc();

    //TODO fix below method ?
    //List<Offer> findAllByUserId(Long userId);

}
