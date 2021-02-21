// ________ examples 1


fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
    console.log('resolved:', response); //fetched the data sucessfully -- returned promise
    return response.json();
}).then((data) => {
   console.log(data);   
}).catch((err) => {
  console.log("rejected:", err);
})



//___________ example 2

/*

fetch('https://puzzle.mead.io/puzzle?wordCount=2').then((response) => {
  if (response.status === 200){
      return response.json();
  } else {
      throw new Error('Unable to fetch the puzzle');
  }
}).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

*/


