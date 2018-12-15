var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var Cloudant = require('@cloudant/cloudant')
var cloudant = new Cloudant({url:'https://aab3394d-785a-412a-b0f9-0b1b1481931f-bluemix:af6352acd3c91c5fa1c9e31e963b3bc851d3c7f5cb0e3779ece2a03088e440a9@aab3394d-785a-412a-b0f9-0b1b1481931f-bluemix.cloudant.com'})
var usersDb
cloudant.db.get('users',function(err,data){
  if(err && err.error == 'not_found') {
    cloudant.db.create('users',function(err1,data1){
      if(err1) {
        console.log(err)
      } else {
        usersDb = cloudant.db.use('users')
        indexify()
      }
    })
  } else {
    usersDb = cloudant.db.use('users')
    indexify()
  }
})


var indexify = function() {
  var email_index = {name:'email', type:'json', index:{fields:['email']}}
  usersDb.index(email_index, function(er, response) {
    if (er) {
      console.log(er)
    }
    console.log('Index creation result: %s', response.indexes);
    console.log('Index creation result: %s', response.result);
    usersDb.index(function(er, result) {
      if (er) {
        throw er;
      }

      console.log('The database has %d indexes', result.indexes.length);
      for (var i = 0; i < result.indexes.length; i++) {
        console.log('  %s (%s): %j', result.indexes[i].name, result.indexes[i].type, result.indexes[i].def);
      }
    });
  });

}
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(urlencodedParser)
app.use(bodyParser.json())
app.use(session({secret: "Your secret key"}));
app.use(function(req,res,next) {
  console.log('Path',req.path)
  console.log(req.session);
  next()
})
app.use(express.static('public'));
app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.post('/add_user', function(req,res){
  console.log("asdas",req)
  usersDb.find({selector:{email:req.body.email}}, function(er, result) {
    if (er) {
      res.send(er)
    }
    console.log("asdf",{er,result})
    console.log("asdf",JSON.stringify(result))
    console.log('Found %d documents with name Alice', result.docs.length);
    for (var i = 0; i < result.docs.length; i++) {
      console.log('  Doc id: %s', result.docs[i]._id);
    }
    if(result.docs.length === 0) {
      usersDb.insert(req.body,function(errr, body, headers) {
        if (errr) {
          console.log('[usersDb.insert] ', err.message)
          res.status(500).send({error:"try again"})
        }
        req.session.user = body;
        res.status(201).send(body)
      })
    } else {
      res.status(409).send()
    }
  });
})

app.post('/login', function(req,res){
  
  usersDb.find({selector:{email:req.body.email}}, function(er, result) {
    if (er) {
      return res.send(er)
    }

    console.log('Found %d documents with name Alice', result.docs.length);
    for (var i = 0; i < result.docs.length; i++) {
      //console.log('  Doc id: %s', result.docs[i]._id);
    }
    if(result.docs.length === 0) {
      res.status(404).send({message:'no user found'})
    } else {
      if (result.docs[0].password === req.body.password) {
        req.session.user = result.docs[0]
        res.status(200).send({id: result.docs[0]._id, message:'successfully login!',userdetails : result.docs[0]})
      } else {
        res.status(401).send({message:'Invalid password'})
      }

    }
  });
});

app.get('/logout', function(req, res){
   req.session.destroy(function(){
      res.status(200).send({message:'successfully logout'});
   });
});

const PORT = process.env.PORT || 8080;

var server = app.listen(PORT, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})
