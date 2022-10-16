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

  fs.readFile(`./views/content-text/fixed-${lang}.json`, 'utf-8', (err, data)=>{
    if(err) throw err;
  
    const fixed = JSON.parse(data);

    fs.readFile(`./views/content-text/${lang}.json`, 'utf-8', (err, data)=>{
      if(err) throw err;
    
      const data_obj = JSON.parse(data);
      data_obj.lang = lang;
      data_obj.fixed = fixed;

      res.render('main', data_obj);
    })
  })
})

app.get('/:project/:lang', (req, res, next) => {
  const project = req.params.project;
  const lang = req.params.lang;

  fs.readFile(`./views/content-text/fixed-${lang}.json`, 'utf-8', (err, data)=>{
    if(err) throw err;
  
    const data_obj = JSON.parse(data);
    
    fs.readFile(`./views/content-text/description/${project}/${lang}.json`, 'utf-8', (err, data1)=>{
      if(err) throw err;
      
      const data_obj1 = JSON.parse(data1);
      data_obj1.lang = lang;
      data_obj1.fixed = data_obj;
  
      res.render('descriptions', data_obj1);
    })
  })
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log('server runnig')
})