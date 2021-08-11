package com.example.demo.controller;

import com.example.demo.model.FileEntity;
import com.example.demo.model.Offer;
import com.example.demo.repository.FileRepository;
import com.example.demo.service.FileService;
import com.example.demo.service.OfferService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AddNewOfferController {

    private final FileService fileService;
    private final OfferService offerService;

    public AddNewOfferController(FileService fileService, FileRepository fileRepository, OfferService offerService) {
        this.fileService = fileService;
        this.offerService = offerService;
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
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(String.format("Could not upload empty file!"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body(String.format("Could not upload the file: %s!", file.getOriginalFilename()));
        }
    }

    @PostMapping("/add-offer2")
    @CrossOrigin(origins = "http://localhost:3000")
    public void postOffer(@RequestBody Offer offer) {
        Optional<FileEntity> fileEntity = fileService.getFile(offer.getTmpID());
        if(fileEntity.isPresent()) {
            System.out.println("LOG| File: "+fileEntity.get().getName() + " updated successfully!");
            offer.setFileEntity(fileEntity.get());
        }
        offerService.postOffer(offer);
        System.out.println("LOG| Offer with ID: "+ offer.getId()  + " updated successfully!");
    }


}
