const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/Weather-App/index.html', (request, response) => {
  response.sendFile(__dirname + '/Weather-App/index.html');
});

// app.listen(port, () => {
//   console.log(`Webpage listening at http://localhost:${port}`);
// });
app.listen('https://malyesh.github.io/');
