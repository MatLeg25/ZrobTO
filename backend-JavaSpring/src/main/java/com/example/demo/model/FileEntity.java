package com.example.demo.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "file")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class FileEntity {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    private String name;
    private String contentType;
    private Long size;

    @Lob
    @Type(type = "org.hibernate.type.ImageType")
    private byte[] data;

    public FileEntity(String name, String contentType, Long size, byte[] data) {
        this.name = name;
        this.contentType = contentType;
        this.size = size;
        this.data = data;
    }

    @OneToMany(mappedBy="fileEntity", fetch= FetchType.LAZY)
    @JsonManagedReference
    private List<Offer> offers;
}
