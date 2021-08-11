package com.example.demo.mapper;

import com.example.demo.dto.OfferDto;
import com.example.demo.model.Offer;
import org.springframework.stereotype.Component;

@Component
public class OfferMapper {

    private final String SERVER_FILE_URL = "http://localhost:8080/files/";
//TODO rethink NULL value for file and subcategory
    public OfferDto map(Offer offer) {
        return OfferDto.builder()
                .id(offer.getId())
                .user_id(offer.getUser_id())
                .title(offer.getTitle())
                .description(offer.getDescription())
                .price(offer.getPrice())
                .deliveryTime(offer.getDeliveryTime())
                .revisions(offer.getRevisions())
                .fileUrl(SERVER_FILE_URL+offer.getFileEntity().getId())
                //.subcategory_Id(offer.getSubcategory().getId())
                .build();
    }
}
