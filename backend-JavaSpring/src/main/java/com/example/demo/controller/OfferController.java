package com.example.demo.controller;

import com.example.demo.dto.OfferDto;
import com.example.demo.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OfferController {

    private final OfferService offerService;

    @Autowired
    public OfferController(OfferService offerService) {
        this.offerService = offerService;
    }

    @GetMapping("/offer")
    public List<OfferDto> get() {
        return offerService.getAllOffers();
    }

    @GetMapping("/offer/{id}")
    public OfferDto getById(@PathVariable("id") UUID id) {
        return offerService.getOfferById(id);
    }

    @GetMapping("/offer/subcategory/{id}")
    public List<OfferDto> getBySubcategoryId(@PathVariable("id") Integer id) {
        return offerService.getOfferBySubcategoryId(id);
    }

    @GetMapping("/offer/price") //http://localhost:8080/offer/price?minPrice=120&maxPrice=141
    public List<OfferDto> getByPriceRange(@RequestParam(name = "minPrice", defaultValue = "0", required = false) Integer minPrice,
                                          @RequestParam(name = "maxPrice", defaultValue = "1000000", required = false ) Integer maxPrice) {
        return offerService.getOfferByPriceRange(minPrice,maxPrice);
    }

    @GetMapping("/offer/sort/price/asc")
    public List<OfferDto> getAllOrderByPriceAsc() {
        return offerService.getAllOrderByPriceAsc();
    }

    @GetMapping("/offer/sort/price/desc")
    public List<OfferDto> getAllOrderByPriceDesc() {
        return offerService.getAllOrderByPriceDesc();
    }

//    @PostMapping("/offer")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public void post(@RequestBody Offer offer) {
//        System.out.println("LOG => From Post: "+ offer.toString());
//        offerService.postOffer(offer);
//    }

//    @PutMapping("/offer")
//    public void put(@RequestBody Offer offer) {
//        System.out.println("LOG => From Put: "+ offer.toString());
//        offerService.updateOffer(offer);
//    }

    @DeleteMapping("/offer")
    public void delete(@RequestParam(name = "id") UUID id) {
        System.out.println("LOG => From Delete: "+id);
        offerService.deleteOffer(id);
    }
}
