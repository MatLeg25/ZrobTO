package com.example.demo.controller;

import com.example.demo.model.FileEntity;
import com.example.demo.model.Offer;
import com.example.demo.service.FileService;
import com.example.demo.service.OfferService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AddNewOfferController {

    private final FileService fileService;
    private final OfferService offerService;

    private FileEntity fileEntity=null;
    private Offer offer=null;

    public AddNewOfferController(FileService fileService, OfferService offerService) {
        this.fileService = fileService;
        this.offerService = offerService;
    }

    @PostMapping("/offer1")
    public ResponseEntity<String> postFile(@RequestParam("file") MultipartFile file) {
        System.out.println("IMAGE FROM POST");
        System.out.println(file.toString());
        try {
            fileService.save(file); //Spring save and get ID
            this.fileEntity = this.fileService.getAllFiles().get(this.fileService.getAllFiles().size()-1);
            return ResponseEntity.status(HttpStatus.OK)
                                 .body(String.format("File uploaded successfully: %s", file.getOriginalFilename()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body(String.format("Could not upload the file: %s!", file.getOriginalFilename()));
        }
    }

    @PostMapping("/offer2")
    @CrossOrigin(origins = "http://localhost:3000")
    public void postOffer(@RequestBody Offer offer) {
        System.out.println("LOG => From Post: "+ offer.toString());
        this.offer=offer;
        post();
    }

    private void post() {
        try {
            offer.setFileEntity(this.fileEntity);
            offerService.postOffer(offer);
            System.out.println("NEW OFFER UPLOAD!");
            //System.out.println(offer.toString());
            this.offer=null;
            this.fileEntity=null;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("ERROR offer has not been updated");
        }
    }


}
