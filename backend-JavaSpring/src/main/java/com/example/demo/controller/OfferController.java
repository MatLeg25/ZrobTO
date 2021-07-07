package com.example.demo.controller;

import com.example.demo.model.OfferModel;
import com.example.demo.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OfferController {

    private final OfferService offerService;

    @Autowired
    public OfferController(OfferService offerService) {
        this.offerService = offerService;
    }

    @GetMapping("/offer")
    public List<OfferModel> get() {
        //System.out.println("LOG => GET all");
        return offerService.getAllOffers();
    }

    @GetMapping("/offer/{id}")
    public OfferModel getById(@PathVariable("id") int id) {
        System.out.println("LOG => GET aby ID: "+id);
        return offerService.getOfferById(id);
    }

    @PostMapping("/offer")
    @CrossOrigin(origins = "http://localhost:3000")
    public void post(@RequestBody OfferModel offerModel) {
        System.out.println("LOG => From Post: "+offerModel.toString());
        offerService.postOffer(offerModel);
    }

    @PutMapping("/offer")
    public void put(@RequestBody OfferModel offerModel) {
        System.out.println("LOG => From Put: "+offerModel.toString());
        offerService.updateOffer(offerModel);
    }

    @DeleteMapping("/offer")
    public void delete(@RequestParam(name = "offerId") int offerID) {
        System.out.println("LOG => From Delete: "+offerID);
        offerService.deleteOffer(offerID);
    }
}
