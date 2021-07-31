package com.example.demo.model;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name="offer")
public class Offer {

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid2")
    private UUID id;
    private UUID user_id=UUID.fromString("88557cc4-da17-4e13-ab87-574b67ad13a6"); //TODO: implement saving offer with corresponding userID
    private String title;
    private String description;
    private int price;
    private int deliveryTime;
    private int revisions;
    private char image;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="subcategory_id")
    private Subcategory subcategory;

    public Offer(String title, String description, int price, int deliveryTime, int revisions, char image, Subcategory subcategory) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.deliveryTime = deliveryTime;
        this.revisions = revisions;
        this.image = image;
        this.subcategory = subcategory;
    }

}
