package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name="category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String name;
    private char icon;

    public Category(String name, char icon) {
        this.name = name;
        this.icon = icon;
    }


    @OneToMany(mappedBy="category", fetch= FetchType.LAZY)
    @JsonBackReference //remove this to have nested subcategories
    private List<Subcategory> subcategories;


}
