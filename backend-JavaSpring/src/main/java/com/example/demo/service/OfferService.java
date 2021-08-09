package com.example.demo.service;

import com.example.demo.model.Offer;
import com.example.demo.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class OfferService {

    private final OfferRepository offerRepository;

    @Autowired
    public OfferService(OfferRepository offerRepository) {

        this.offerRepository = offerRepository;
    }

    public List<Offer> getAllOffers() {
        return offerRepository.findAll();
    }

    public Optional<Offer> getOfferById(UUID id) {
        System.out.println("Requested ID: "+id);
        return this.offerRepository.findById(id);
    }

    public void postOffer(Offer offer) {
        offerRepository.save(offer);
    }

    public void updateOffer(Offer offer) {
        Offer offerToUpdate = this.offerRepository.getById(offer.getId());
        offerToUpdate.setTitle(offer.getTitle());
        offerToUpdate.setDescription(offer.getDescription());
        offerToUpdate.setPrice(offer.getPrice());
        offerRepository.save(offerToUpdate);
    }

    public void deleteOffer(UUID id) {
        offerRepository.deleteById(id);
    }
}
