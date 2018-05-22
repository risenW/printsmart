//Helper class holds all the routes functions used in index.js
//Home route

exports.home = (req,res)=>{
    res.render('index', {text : "Hello there again"});
};

exports.single = (req,res) =>{
    var product = req.params.product;
    res.send('Request for' + product);
};

exports.errorpage = (req,res) => {
    res.render('404');
}

exports.banners = (req,res)=>{
    res.render('banners', {title : "Order your Banners | cheap and high quality banners delivered to your doorstep"});
}