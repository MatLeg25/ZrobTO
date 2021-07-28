package com.example.demo.model;

import lombok.*;
import javax.persistence.*;

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

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="category_id", nullable=false, updatable = false)
    private Category category;



}
