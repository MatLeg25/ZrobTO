package com.example.demo.model;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    //private UUID user_id;
    private String title;
    private String description;
    private int price;
    private int deliveryTime;
    private int revisions;
    private char image;


    public Offer(String title, String description, int price, int deliveryTime, int revisions, char image, Subcategory subcategory) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.deliveryTime = deliveryTime;
        this.revisions = revisions;
        this.image = image;
        this.subcategory = subcategory;

        System.out.println(this.getId());
    }

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="subcategory_id", nullable=false)
    private Subcategory subcategory;

}
