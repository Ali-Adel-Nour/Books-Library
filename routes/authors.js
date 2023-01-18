const express = require('express');
const router = express.Router();
const Author = require('../models/authors');
const Book = require("../models/book");

// All Books route
router.get("/", async (req, res) => {
   let query = Book.find()
if(req.query.title != null && req.query.title != ' '){

   query= query.regex('title',new RegExp(req.query.title,'i'))
}

if(req.query.publishedBefore != null && req.query.publishedBefore != ' '){
// lte = less than
   query= query.lte('publishDate',req.query.publishedBefore)
}

if(req.query.publishedAfter != null && req.query.publishedAfter != ' '){
   // lte = less than
      query= query.gte('publishDate',req.query.publishedAfter)
   }
   


   try{
      const books = await query.exec()
  res.render('books/index',{
   books:books,
   searchOptions: req.query
  
  })
  
}catch(error){
   res.redirect("/");
}
});
//All Authors route
router.get('/',async (req,res)=>{
    let searchOptions = {}
    if(req.query!= null&& req.query.name !==''){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
try{
    const authors = await Author.find(searchOptions)
    res.render('authors/index',{
        authors:authors,searchOptions:req.query})

}catch{

    res.redirect('/')
}

    
});

//New Author Route

router.get('/new' , (req,res)=>{
res.render('authors/new',{author : new Author()});



});

//Create Author Route

router.post('/' , async (req,res)=>{
const author = new Author({
    name:req.body.name
})
try{
const newAuthor = await author.save();
 //res.redirect(`authors/${newAuthor.id}`);

 res.redirect(`authors`);

}catch{
  res.render('authors/new',{
            author: author,
            errorMessage: 'Error creating Author'
})
}

})

module.exports = router
