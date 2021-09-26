package com.example.demo.controller;

import com.example.demo.model.FileEntity;
import com.example.demo.model.Offer;
import com.example.demo.model.Subcategory;
import com.example.demo.service.FileService;
import com.example.demo.service.OfferService;
import com.example.demo.service.SubcategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:8081")
public class AddNewOfferController {

    private final FileService fileService;
    private final OfferService offerService;
    private final SubcategoryService subcategoryService;

    public AddNewOfferController(FileService fileService, OfferService offerService, SubcategoryService subcategoryService) {
        this.fileService = fileService;
        this.offerService = offerService;
        this.subcategoryService = subcategoryService;
    }

    @PostMapping("/add-offer-file")
    public ResponseEntity<String> postFile(@RequestParam("file") MultipartFile file) {
        try {
            if (!file.isEmpty()) {
                String fileID = fileService.save(file); //Spring save and get ID
                return ResponseEntity.status(HttpStatus.OK)
                        //.body(String.format("File uploaded successfully: %s , |ID=%s", file.getOriginalFilename(), fileID));
                        .body(fileID);
            } else {
                return ResponseEntity.status(HttpStatus.NO_CONTENT)
                        .body(String.format("WARNING: Could not upload empty file!"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body(String.format("Could not upload the file: %s!", file.getOriginalFilename()));
        }
    }

    @PostMapping("/add-offer2")
//    @CrossOrigin(origins = "http://localhost:3000")
    public void postOffer(@RequestBody Offer offer) {

        setOfferSubcategory(offer);

        Optional<FileEntity> fileEntity = fileService.getFile(offer.getFileID());
        if(fileEntity.isPresent()) {
            System.out.println("LOG| File: "+fileEntity.get().getName() + " updated successfully!");
            offer.setFileEntity(fileEntity.get());
        }

        offerService.postOffer(offer);
        System.out.println("LOG| Offer with ID: "+ offer.getId()  + " updated successfully!");
    }


    //////////////////////////////////PUT
    @PutMapping("/update-offer")
    public void put(@RequestBody Offer offer) {

        setOfferSubcategory(offer);

//TODO update sibcategory (wydziel do metody posti put) and file
        offerService.updateOffer(offer);
    }


    private void setOfferSubcategory(Offer offer) {
        Subcategory subcategory = subcategoryService.getSubcategoryById(offer.getSubcategoryID());
        offer.setSubcategory(subcategory);
    }


}
