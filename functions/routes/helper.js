//Helper class holds all the routes functions used in index.js
//Home route

exports.home = (req,res)=>{
    res.render('index', {text : "Hello there again"});
};

exports.admin = (req,res) =>{
    res.render('admin');
};