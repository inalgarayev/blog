const express = require('express');
const morgan = require('morgan');

const app = express();
app.listen(3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set(morgan('dev'));

app.get('/', (req, res)=>{
	res.render('index', {title: 'Home'});
})
app.get('/about', (req, res)=>{
	res.render('about', {title: 'About'});
})
app.get('/about-us', (req, res)=>{
	res.redirect('/about');
})
app.get('/payment', (req, res)=>{
	res.render('payment', {title: 'Pay'});
})
app.get('/payment-us', (req, res)=>{
	res.redirect('/payment')
})
app.get('/contact', (req, res)=>{
	res.render('contact', {title: 'Contact'});
})
app.get('/contact-us', (req, res)=>{
	res.redirect('/contact');
})
app.use((req, res)=>{
	res.status(404).render('404', {title: 'Bulunamadı'})
})