package com.example.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class OfferModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String title;
    private String description;
    private double price;
    private String date;

    @Autowired
    public OfferModel(int id, String title,String description, double price, String date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.date = date;
    }

    @Override
    public String toString() {
        return "OfferModel{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", date='" + date + '\'' +
                '}';
    }
}
