var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }))

function isLoggedIn(req, res, next) {
  console.log
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

var validBlogs = [];

function filterByTitle(obj) {
  if ('title' in obj && typeof(obj.title) === 'string') {
    validBlogs.push(obj);
    return true;
  } else {
    return false;
  }
};

router.route('/')
  /* GET All Blogs */
  .get(function(req, res) {
    mongoose.model('Blog').find({})
    .populate({ path:'comments', populate:{path:'user', select:'local.email'}})
    .exec( function(err, blogs){
      if(err){
        return console.log(err);
      } else {
        var arrByTitle = blogs.filter(filterByTitle);
        res.json(arrByTitle);
      }
    });
  })

  .post(function(req, res){
    console.log(req.body);
    var title = req.body.title;
    var body = req.body.body;
   

    mongoose.model('Blog').create({
      title: title,
      body: body,
      
    }, function(err, blog){
      if(err){
        res.send("Bad Blog")
      } else{
        console.log("New blog named " + blog + "created!");
        res.send(blog);
      }
    });
  });


router.route('/:id')
    .get(function(req, res) {
        mongoose.model('Blog').findById({
            _id: req.params.id
        }).populate('comments').exec(function(err, blog) {
            if (err)
                res.send(err);

            res.send(blog);
        });
    })

    // update the blog with this id 
    .put(function(req, res) {

        mongoose.model('Blog').findById({
            _id: req.params.id
        }, function(err, blog) {
          blog.title = req.body.title;
          blog.body = req.body.body;
            if (err)
                res.send(err);

            blog.save();
            res.json(blog)
        });
    })
    // delete the blog with this id 
    .delete(function(req, res) {
        mongoose.model('Blog').remove({
            _id: req.params.id
        }, function(err, blog) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });



router.route('/:id/comments')
    .get(function(req, res) {
        mongoose.model('Blog').findById({  _id: req.params.id })
        .populate({ path:'comments', populate:{path:'user', select:'local.email'}})
        .exec( function(err, blog) {
            if (err)
                res.send(err);

            res.send(blog);
    });
});

router.route('/:id/comment', isLoggedIn)
  .post(function(req, res) {
        mongoose.model('Comment').create({
            body: req.body.body,
            user: req.user,
            blog: req.params.id
        }, function(err, comment) {
            if (err)
                return res.send(err);
            mongoose.model('Blog').findById({
              _id: req.params.id
            }, function(err, blog){
              if(err)
                return res.send(err)
              blog.comments.push(comment._id)
              blog.save();
              console.log(comment);
              res.json(comment);
            })
        });
    })
    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/blogs/:id)
    .delete(function(req, res) {
        mongoose.model('Blog').remove({
            _id: req.params.id
        }, function(err, blog) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });
module.exports = router;