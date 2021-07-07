package com.example.demo.service;

import com.example.demo.model.OfferModel;
import com.example.demo.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferService {

    private final OfferRepository offerRepository;

    @Autowired
    public OfferService(OfferRepository offerRepository) {
        this.offerRepository = offerRepository;
    }

    public List<OfferModel> getAllOffers() {
        return offerRepository.findAll();
    }

    public OfferModel getOfferById(int id) {
        System.out.println("ide: "+id);
        List<OfferModel> alls = getAllOffers();

        //alls.forEach(offerModel -> System.out.println("ELO: "+offerModel.getId()));
        return this.offerRepository.getById(id);
    }

    public void postOffer(OfferModel offerModel) {
        offerRepository.save(offerModel);
    }

    public void updateOffer(OfferModel offerModel) {
        OfferModel offerModelToUpdate = this.offerRepository.getById(offerModel.getId());

        offerModelToUpdate.setTitle(offerModel.getTitle());
        offerModelToUpdate.setDescription(offerModel.getDescription());
        offerModelToUpdate.setPrice(offerModel.getPrice());

        offerRepository.save(offerModelToUpdate);
    }

    public void deleteOffer(int offerID) {
        offerRepository.deleteById(offerID);
    }
}
