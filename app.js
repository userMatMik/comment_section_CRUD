import { renderComments } from "./dom_create_elements.js";

const fetchData = async () => {
    const response = await fetch('./data.json');
    const commentsData = await response.json();
    console.log(commentsData);
    

    renderComments(commentsData)
}



fetchData()