//GIVEN JAVASCRIPT CODE


// Your Task:

// Convert the provided JavaScript code snippet to TypeScript.
// Modify the TypeScript code to fetch data from the specified API endpoint.
// Print only the title and id properties of each post fetched from the API.
// Ensure that your TypeScript code handles any potential errors during the data fetching process



var url = "https://jsonplaceholder.typicode.com/posts";

var fetchData = function () {
  fetch(url).then(function (res) {
    console.log(res);
    res.json().then(function (data) {
      console.log(data);
    });
  });
};

fetchData();
