package com.example.demo.mapper;

import com.example.demo.dto.OfferDto;
import com.example.demo.model.Offer;
import org.springframework.stereotype.Component;

@Component
public class OfferMapper {

    private final String SERVER_FILE_URL = "http://localhost:8080/files/";
    private final String DEFAULT_FILE_URL = "https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg";

    public OfferDto map(Offer offer) {
        return OfferDto.builder()
                .id(offer.getId())
                .user_id(offer.getUser_id())
                .title(offer.getTitle())
                .description(offer.getDescription())
                .price(offer.getPrice())
                .deliveryTime(offer.getDeliveryTime())
                .revisions(offer.getRevisions())
                .fileUrl(this.getFileUrl(offer))
                .category_Id(this.getCategoryId(offer))
                .subcategory_Id(this.getSubcategoryId(offer))
                .subcategoryName(this.getSubcategoryName(offer))
                .build();
    }

    private String getFileUrl(Offer offer) {
        if (offer.getFileEntity() == null) {
            return DEFAULT_FILE_URL;
        } else {
            return SERVER_FILE_URL+offer.getFileEntity().getId();
        }
    }

    private int getCategoryId(Offer offer) {
        if (offer.getSubcategory().getCategory() == null) {
            return -1;
        } else {
            return offer.getSubcategory().getCategory().getId();
        }
    }

    private int getSubcategoryId(Offer offer) {
        if (offer.getSubcategory() == null) {
            return -1;
        } else {
            return offer.getSubcategory().getId();
        }
    }

    private String getSubcategoryName(Offer offer) {
        if (offer.getSubcategory() == null) {
            return "";
        } else {
            return offer.getSubcategory().getName();
        }
    }

}
