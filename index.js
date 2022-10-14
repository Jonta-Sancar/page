const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const fs = require('fs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {

  res.redirect('/pt');
})

app.get('/:lang', (req, res) => {
  const lang = req.params.lang;

  fs.readFile(`./views/content-text/${lang}.json`, 'utf-8', (err, data)=>{
    if(err) throw err;
  
    const data_obj = JSON.parse(data);
    data_obj.lang = lang;

    res.render('main', data_obj);
  })

})

const PORT = 3000;
app.listen(PORT, () => {
  console.log('server runnig')
})