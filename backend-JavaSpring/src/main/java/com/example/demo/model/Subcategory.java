package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name="subcategory")
public class Subcategory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String name;

    public Subcategory(String name, Category category) {
        this.name = name;
        this.category = category;
    }

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="category_id")
    @JsonIgnore
    private Category category;

    @OneToMany(mappedBy="subcategory", fetch= FetchType.LAZY)
    @JsonIgnore
    private List<Offer> offers;


}
