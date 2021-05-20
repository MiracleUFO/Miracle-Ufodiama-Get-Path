import { getPath } from './getPath.js';
import { displayResults } from './displayResults.js';


const a = {
  user1: {
    id: 1,
    name: {
    firstName: "James",
    lastName: "Ibori"
    },
    location: {
      city: "Ikoyi",
      state: "Lagos",
      address: "One expensive house like that"
    }
  },
  user2: {
    id: 2,
    name: {
    firstName: "Janeth",
    lastName: "Ikuku"
    },
    location: {
      city: "Tokyo",
      state: "Japan",
      address: "Japa plans"
    }
  }
}


window.addEventListener("load", function () {
  let el = document.getElementById("search-btn");
  el.addEventListener("click", function (e){
    handleSubmit(e);
  } , false);
})


const handleSubmit = (e) => {
  e.preventDefault();
  let query = document.searchForm.search.value;
  if (query) {
    let results = getPath(a, query);
    displayResults(results.type, results.payload);
  } else 
      displayResults("ERROR", "Input something first");
  document.searchForm.search.value = "";
}