require('dotenv').config();
const express = require('express');
const path    = require('path');

const app = express();

app.get('/', (req, res)=>{
  res.redirect('/pt');
})

app.get('/pt', express.static(path.join(__dirname, './client/pages/pt')));
app.get('/en', express.static(path.join(__dirname, './client/pages/en')));

app.get('/assets', express.static(path.join(__dirname, './client/assets')));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('server runnig');
})