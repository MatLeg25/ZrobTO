package com.example.demo.model;

import lombok.*;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private UUID id;
    private String title;
    private String description;
    private int price;
    private int deliveryTime;
    private int revisions;
    private char image;

}
