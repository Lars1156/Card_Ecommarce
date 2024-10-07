const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/', (req,res)=>{
    const brands = [
        { name: 'Nike', price: 150 },
        { name: 'Adidas', price: 200 },
        { name: 'Puma', price: 120 },
        { name: 'Reebok', price: 180 },
    ];
    res.render('index', { brands });
});

app.listen(3000, ()=>{
    console.log("Server is running on the 3000 port");
    
})