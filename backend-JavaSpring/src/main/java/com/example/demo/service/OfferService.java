package com.example.demo.service;

import com.example.demo.dto.OfferDto;
import com.example.demo.mapper.OfferMapper;
import com.example.demo.model.Offer;
import com.example.demo.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OfferService {

    private final OfferRepository offerRepository;
    private final OfferMapper offerMapper;

    @Autowired
    public OfferService(OfferRepository offerRepository, OfferMapper offerMapper) {
        this.offerRepository = offerRepository;
        this.offerMapper = offerMapper;
    }

    public List<OfferDto> getAllOffers() {
        return offerRepository.findAll().stream()
                .map(offerMapper::map).collect(Collectors.toList());
    }

    public OfferDto getOfferById(UUID id) {
        Optional<Offer> offer = this.offerRepository.findById(id);
        if (offer.isPresent()) {
            return offerMapper.map(offer.get());
        }
        return null;
    }

    public void postOffer(Offer offer) {
        offerRepository.save(offer);
    }

    public void updateOffer(Offer offer) {
        Offer offerToUpdate = this.offerRepository.getById(offer.getId());
        offerToUpdate.setTitle(offer.getTitle());
        offerToUpdate.setDescription(offer.getDescription());
        offerToUpdate.setPrice(offer.getPrice());
        offerToUpdate.setDeliveryTime(offer.getDeliveryTime());
        offerToUpdate.setRevisions(offer.getRevisions());
        offerToUpdate.setSubcategory(offer.getSubcategory());
        offerRepository.save(offerToUpdate);
    }

    public void deleteOffer(UUID id) {
        offerRepository.deleteById(id);
    }
}
