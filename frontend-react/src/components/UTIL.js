import axios from "axios";

export function GetCategoriesNames() {
    return "kategorie";
}


export function GetSubcategoriesNames() {
    console.log("GET-SUB-CAT")
    const subcategories = [];
    axios.get('http://localhost:8080/category')
    .then(response => response.data)
    .then(data => {
        data.forEach(category => {
            subcategories.push(category.name);
        });
        
        console.log(subcategories)
        return subcategories;
    });
}