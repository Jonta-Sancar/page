require('dotenv').config();
const express = require('express');
const path    = require('path');

const app = express();

app.get('/', (req, res)=>{
  res.redirect('/pt');
})

app.use('/pt', express.static(path.join(__dirname, './client/pages/pt')));
app.use('/en', express.static(path.join(__dirname, './client/pages/en')));

app.use('/assets', express.static(path.join(__dirname, './client/assets')));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('server runnig');
})