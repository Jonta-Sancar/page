const path = require('path');
const express = require('express');
const app = express();
const ejs = require('ejs');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {

  res.redirect('/pt');
})

app.get('/:lang', (req, res) => {

  const lang = req.params.lang;
  res.render('main', { lang });
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log('server runnig')
})