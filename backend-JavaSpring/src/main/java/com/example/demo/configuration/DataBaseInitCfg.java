package com.example.demo.configuration;

import com.example.demo.model.Category;
import com.example.demo.model.Subcategory;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.SubcategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.util.*;

@Configuration
public class DataBaseInitCfg {

    private final CategoryRepository categoryRepository;
    private final SubcategoryRepository subCategoryRepository;

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
            "SubCategory1a","SubCategory1b","SubCategory1c",
            "SubCategory1d","SubCategory1e","SubCategory1f",
            "SubCategory1g","SubCategory1h","SubCategory1i");

    private final List<String> SUB_CATEGORIES_2 = Arrays.asList(
            "SubCategory2a","SubCategory2b","SubCategory2c",
            "SubCategory2d","SubCategory2e","SubCategory2f",
            "SubCategory2g","SubCategory2h","SubCategory2i");

    private final List<String> SUB_CATEGORIES_3 = Arrays.asList(
            "SubCategory3a","SubCategory3b","SubCategory3c",
            "SubCategory3d","SubCategory3e","SubCategory3f",
            "SubCategory3g","SubCategory3h","SubCategory3i");

    private final List<String> SUB_CATEGORIES_4 = Arrays.asList(
            "SubCategory4a","SubCategory4b","SubCategory4c",
            "SubCategory4d","SubCategory4e","SubCategory4f",
            "SubCategory4g","SubCategory4h","SubCategory4i");

    private final List<List<String>> SUB_CATEGORIES_LIST = Arrays.asList(SUB_CATEGORIES_0, SUB_CATEGORIES_1,SUB_CATEGORIES_2,SUB_CATEGORIES_3,SUB_CATEGORIES_4);



    @Autowired
    public DataBaseInitCfg(CategoryRepository categoryRepository, SubcategoryRepository subCategoryRepository) {
        this.categoryRepository = categoryRepository;
        this.subCategoryRepository = subCategoryRepository;
        addInitialConfig();
    }

    private void addInitialConfig() {
        addCategories();
    }

    private void addCategories() {
        List<Category> categories = new ArrayList<>();
        CATEGORIES.forEach((category) -> categories.add(new Category(category,'X')));
        categories.forEach((this.categoryRepository::save));

        //PYTANIA NA KONSULTACJE:
        // 1. Relacja one-to-many (obiekt-do-listaObiektów) || czy da się tak jak na schemacie DB: id(int) - category_id(int)
        // 2. nasza implementacja: autokonfigurator, one-to-many
        categories.forEach((category) -> System.out.println(category));

        categories.forEach((category -> SUB_CATEGORIES_LIST.get(category.getId()-1).forEach((subcategory) ->
                this.subCategoryRepository.save(new Subcategory(1,subcategory,category)))));
    }
}
