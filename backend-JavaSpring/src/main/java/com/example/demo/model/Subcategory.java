package com.example.demo.model;

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

    public Subcategory(int id, String name, Category category) {
        this.id = id;
        this.name = name;
        this.category = category;
    }

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="category_id", nullable=false, updatable = false)
    private Category category;

    @OneToMany(mappedBy="subcategory", fetch= FetchType.LAZY)
    private List<Offer> offers;


}
