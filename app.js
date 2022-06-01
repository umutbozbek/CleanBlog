const  express =require('express');
const mongoose=require('mongoose');
const path=require('path');
const ejs=require('ejs');
const Blog=require('./model/Blog');


const app=express();

app.set('view engine', 'ejs');


//connect mongodb
mongoose.connect('mongodb://0.0.0.0:27017/cleanblog-test-db ')

//MİDDLEWARES
app.use(express.static(path.resolve(__dirname + '/public')));
app.use(express.urlencoded({extended:true}))
app.use(express.json())



//Routes
app.get('/', async(req, res) => {
  const posts= await Blog.find({})
    res.render('index', {
      posts
    })
  });
  
  app.get('/about', (req, res) => {
    res.render('about');
  });
  
  app.get('/add_post', async (req, res) => {
    res.render('add_post')
  });
  
  app.get('/post', (req, res) => {
    res.render('post');
  });


// "Add New Post" sayfamızdan göndericeğimiz veriler req.body ile 
// yakalayalım, gerekli middleware fonksiyonarını kullanalım.
app.post('/posts',async(req,res)=>{
  Blog.create(req.body)
  res.redirect('/')
})


const port = 5000

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`);
})