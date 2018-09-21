var express = require("express");
var app = express();
var port = 1234;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://yasho:zerone1234@ds111063.mlab.com:11063/zerone",{ useNewUrlParser: true });
var blogPostSchema = new mongoose.Schema({
    header: String,
    content: String,
    author: String
});
var post = mongoose.model("post", blogPostSchema);

app.post("/addPost", (req, res) => {
    var newPost = new post(req.body);
    console.log(req.body);
    newPost.save((err,record) => {
    	if(err) {
    		return res.send("Couldnt save data in database");	
    	}
    	return res.send(record);
    });
});

app.get('/viewPosts', (req, res) => {

    post.find({}, (err, records) => {
      if (err) {
        return res.send("Couldnt fetch records from database");
      }
      return res.send(records);
    });
  });

app.listen(port, () => {
    console.log("Server listening on port " + port);
});