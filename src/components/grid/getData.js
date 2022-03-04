import { pictureSearch } from "../../api/api";

export const search = (searchTerm) => {
    if (!searchTerm) {
        return;
    }
    return pictureSearch(searchTerm)
        .then(response => response.json())
        .then(data => {
            return data
        });
    
}