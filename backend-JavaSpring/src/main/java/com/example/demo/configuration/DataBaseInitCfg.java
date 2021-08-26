package com.example.demo.configuration;

import com.example.demo.model.Category;
import com.example.demo.model.FileEntity;
import com.example.demo.model.Offer;
import com.example.demo.model.Subcategory;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.FileRepository;
import com.example.demo.repository.OfferRepository;
import com.example.demo.repository.SubcategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.io.File;
import java.io.FileInputStream;
import java.util.*;

@Configuration
public class DataBaseInitCfg {

    private final CategoryRepository categoryRepository;
    private final SubcategoryRepository subCategoryRepository;
    private final OfferRepository offerRepository;
    private final FileRepository fileRepository;
    private final Random random= new Random();

    private final List<String> CATEGORIES = Arrays.asList(
            "Grafika i design",
            "Digital Marketing",
            "Foto i wideo",
            "Programowanie",
            "Pozostałe");

    private final List<String> SUB_CATEGORIES_0 = Arrays.asList(
            "Logo i marketing wizerunkowy","Projekt logo","Wizytówki","Design stylu marki",
            "Web i App Design","Web Design","App Design","Landing Page Design","UX Design",
            "Design Banerów","Design ikon","Design druku","Ulotki","Broszury","Plakaty",
            "Katalogi","Menu","Zaproszenia");

    private final List<String> SUB_CATEGORIES_1 = Arrays.asList(
            "Marketing w sieci","Strategie marketingowe","Email marketing",
            "Video marketing","Crowdfunding","Inne");

    private final List<String> SUB_CATEGORIES_2 = Arrays.asList(
            "Edycja wideo","Efekty wizualne","Napisy do filmów",
            "Animacje GIF","Animacje 3D","Zapowiedzi filmów");

    private final List<String> SUB_CATEGORIES_3 = Arrays.asList(
            "Python","Java","C#",
            "C","C++","JavaScript");

    private final List<String> SUB_CATEGORIES_4 = Arrays.asList();

    private final List<List<String>> SUB_CATEGORIES_LIST = Arrays.asList(SUB_CATEGORIES_0, SUB_CATEGORIES_1,SUB_CATEGORIES_2,SUB_CATEGORIES_3,SUB_CATEGORIES_4);



    @Autowired
    public DataBaseInitCfg(CategoryRepository categoryRepository, SubcategoryRepository subCategoryRepository, OfferRepository offerRepository, FileRepository fileRepository) {
        this.categoryRepository = categoryRepository;
        this.subCategoryRepository = subCategoryRepository;
        this.offerRepository = offerRepository;
        this.fileRepository = fileRepository;
        setInitialConfig();
    }

    private void setInitialConfig() {
        addDefaultImage();
        addCategories();
        addSubcategories();
        addOffers();
    }

    private void addDefaultImage() {
        File file= new File("src/main/resources/static/example-offer.jpg");
        byte[] imageData = new byte[(int) file.length()];

        try {
            FileInputStream fileInputStream = new FileInputStream(file);
            fileInputStream.read(imageData);
            fileInputStream.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        FileEntity fileEntity = new FileEntity("example-offer.jpg","image/jpeg",53510L,imageData);
        this.fileRepository.save(fileEntity);
    }

    private void addCategories() {
        List<Category> categories = new ArrayList<>();
        CATEGORIES.forEach((category) -> categories.add(new Category(category,'X')));
        categories.forEach((this.categoryRepository::save));
        //categories.forEach((category) -> System.out.println(category));
    }

    private void addSubcategories() {
        List<Category> categories =this.categoryRepository.findAll();
        categories.forEach((category -> SUB_CATEGORIES_LIST.get(category.getId()-1).forEach((subcategory) ->
                this.subCategoryRepository.save(new Subcategory(subcategory,category)))));
    }

    //generate one offer with random properties for each subcategory
    private void addOffers() {
        FileEntity fileEntity = this.fileRepository.findAll().get(0);
        List<Subcategory> subcategories = this.subCategoryRepository.findAll();
        subcategories.forEach(
                (subcategory -> {
                    this.offerRepository.save(new Offer("Example offer", "Example description", random.nextInt(100)+100, random.nextInt(5)+1, random.nextInt(2)+1, fileEntity,subcategory));
                }));
    }

}
