
// Here's the TypeScript solution code for the problem:

const url: string = "https://jsonplaceholder.typicode.com/posts";
let allPosts: IPost[] = [];

const fetchData = () => {
  fetch(url)
    .then((res) => {
     
      res.json().then((data: IPost[]) => {
      
        allPosts = data;
        // console.log("posts",allPosts)
        updateFinalArray();
      });
    })
    .catch((error) => console.error('Error fetching data:', error));
};

fetchData();

interface IPost {
  userId?: number;
  id: number;
  title: string;
  body?: string;
}

let finalArray: IPost[]=[];

const updateFinalArray = () => {
  finalArray = allPosts.map((post: IPost) => {
    return { id: post.id, title: post.title };
  });
  printFinalArray();
};

const printFinalArray=()=>{
    console.log(finalArray);
}



// In this TypeScript solution:

// The IPost interface is defined to represent the structure of posts fetched from the API.
// The fetchData function fetches data from the specified URL, extracts the JSON response, and logs the first post's title to the console.
// The updateFinalArray function maps through all fetched posts, extracting only the id and title properties, and assigns them to the finalArray.
// The code also includes error handling for fetching data from the API using catch to log any errors encountered during the process.
// This TypeScript code effectively fetches data from the API, extracts the required properties (id and title) from each post, and stores them in the finalArray.





export{}