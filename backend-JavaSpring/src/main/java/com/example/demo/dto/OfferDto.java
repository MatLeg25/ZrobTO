package com.example.demo.dto;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class OfferDto {

    private UUID id;
    private Long user_id;
    private String title;
    private String description;
    private int price;
    private int deliveryTime;
    private int revisions;
    private String fileUrl;
    private int category_Id;
    private int subcategory_Id;
    private String subcategoryName;
}
