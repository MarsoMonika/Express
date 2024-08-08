console.log("Hello World!");

fetch('/api/recipes')
  .then(response => response.json())
  .then(data => {
    console.log('Recipes:', data);
    // You can also update the DOM to display recipes here
  })
  .catch(error => {
    console.error('Error fetching recipes:', error);
  });