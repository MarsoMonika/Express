import express from 'express';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const serverJsFileUrl = import.meta.url;
const __filename = fileURLToPath(serverJsFileUrl);
const __dirname = dirname(__filename);

const PORT = 4000;

const app = express();

// Calculate the absolute static path.
// const staticPath = join(__dirname, "..", "client");
// Add a middleware to serve them from "/static" endpoint.
//app.use('/static', express.static(staticPath));
const publicPath = join(__dirname, 'public');
app.use('/public', express.static(publicPath));
 
app.get('/recipes', (req, res) => {

  // const recipesHtmlPath = join(__dirname, '..', 'client', 'recipes.html'); 
  // res.sendFile(recipesHtmlPath);

    const recipes = [
      { id: 1, name: 'Spaghetti Bolognese' },
      { id: 2, name: 'Chicken Curry' },
      { id: 3, name: 'Beef Stroganoff' }
    ];
    res.json(recipes);
  
});

app.get('/recipes', (req, res) => {
  const recipesHtmlPath = join(__dirname, 'public', 'recipes.html');
  res.sendFile(recipesHtmlPath);
});
// app.use(express.json());

// app.get('/hello', (req, res) => {
//     console.log('/hello enpoint is called');
//     res.send('world');
// });

// app.post('/calculate', (req, res) => {
//     const requestBody = req.body;
//     const a = requestBody.operandA;
//     const b = requestBody.operandB;
//     const requestContentType = req.get('Content-Type');
//     console.log('request body:', requestBody);
//     console.log('request content-type header:', requestContentType);

//     // doing the buisness logic
//     const result = a + b;
//     const responseBody = {
//       operands: [a, b],
//       result: result
//     }
//     res.send(responseBody);
// });

// app.post('/calculate/a/:operandA/b/:operandB', (req, res) => {
//   const pathParameters = req.params;
//   const a = parseInt(pathParameters.operandA);
//   const b = parseInt(pathParameters.operandB);
//   console.log('path parameters:', pathParameters );

//   const result = a + b;
//   const responseBody = {
//     operands: [a, b],
//     result: result
//   };
  
//   res.send(responseBody);
// });

// app.post('/calculate', (req, res) => {
//   const queryParameters = req.query;
//   const a = parseInt(queryParameters.operandA);
//   const b = parseInt(queryParameters.operandB);
//   console.log('query parameters', queryParameters);

//   const result = a + b;
//   const responseBody = {
//     operands : [a, b],
//     result: result,
//   };
  
//   res.send(responseBody)
// });

// app.post('/calculate', (req, res) => {
//   const requestBody = req.body;
//   const a = requestBody.operandA;
//   const b = requestBody.operandB;
//   console.log('request body', requestBody);
//   if (Number.isNaN(a)|| Number.isNaN(b)) {

//     // setting up the correct status code
//     res.status(400);
//     // sending an informative message to the client
//     res.send({error: 'Both operands must be a number.'});
//     return;
//   }
//   const result = a + b 
//   const responseBody = {
//     operands: [ a, b],
//     result: result
//   };
  
  
//   res.send(responseBody)
// });

// app.get('/bad-cat', () => {
//   // This line should throw an error
//   const catName = theCat.name;

//   res.send(catName);
// });



app.listen(PORT, function () {
    console.log(`Your server is running on port: ${PORT}`);
  });