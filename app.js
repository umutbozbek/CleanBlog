const  express =require('express')
const path=require('path')
const ejs=require('ejs')


const app=express();

app.set('view engine', 'ejs');



//MİDDLEWARES
app.use(express.static(path.resolve(__dirname + '/public')));


//Rautes
app.get('/', (req, res) => {
    res.render('index');
  });
  
  app.get('/about', (req, res) => {
    res.render('about');
  });
  
  app.get('/add_post', (req, res) => {
    res.render('add_post');
  });
  
  app.get('/post', (req, res) => {
    res.render('post');
  });

const port = 5000

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`);
})