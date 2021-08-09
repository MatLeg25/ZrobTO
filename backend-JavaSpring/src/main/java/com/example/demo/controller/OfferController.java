package com.example.demo.controller;

import com.example.demo.model.Offer;
import com.example.demo.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
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
    public List<Offer> get() {
        //System.out.println("LOG => GET all");
        return offerService.getAllOffers();
    }

    @GetMapping("/offer/{id}")
    public Optional<Offer> getById(@PathVariable("id") UUID id) {
        System.out.println("LOG => GET aby ID: "+id);
        return offerService.getOfferById(id);
    }

    @PostMapping("/offer")
    @CrossOrigin(origins = "http://localhost:3000")
    public void post(@RequestBody Offer offer) {
        System.out.println("LOG => From Post: "+ offer.toString());
        offerService.postOffer(offer);
    }

    @PutMapping("/offer")
    public void put(@RequestBody Offer offer) {
        System.out.println("LOG => From Put: "+ offer.toString());
        offerService.updateOffer(offer);
    }

    @DeleteMapping("/offer")
    public void delete(@RequestParam(name = "id") UUID id) {
        System.out.println("LOG => From Delete: "+id);
        offerService.deleteOffer(id);
    }
}
