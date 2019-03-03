var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var Cloudant = require('@cloudant/cloudant')
var cloudant = new Cloudant({url:'https://aab3394d-785a-412a-b0f9-0b1b1481931f-bluemix:af6352acd3c91c5fa1c9e31e963b3bc851d3c7f5cb0e3779ece2a03088e440a9@aab3394d-785a-412a-b0f9-0b1b1481931f-bluemix.cloudant.com'})

/*
it is assosiated with user / his roles / his enterprises/
profile attributes name/ link to accounts/ pic married status gender date of birth etc
accounts attributes password / emails / numbers /

*/
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

/*
product DB is DB associated to have users related to any enterprise its owner its detail
all other places its ID refer as productId
*/
var productsDb

cloudant.db.get('productsandservices',function(err,data){
  if(err && err.error == 'not_found') {
    cloudant.db.create('productsandservices',function(err1,data1){
      if(err1) {
        console.log(err)
      } else {
        productsDb = cloudant.db.use('productsandservices')
        indexifyProductDb()
      }
    })
  } else {
    productsDb = cloudant.db.use('productsandservices')
    indexifyProductDb()
  }
})

/*
Enterprise DB is DB associated to have users related to that enterprise its owner its detail
all other places its ID refer as enterpriseId
*/
var enterpriseDb

cloudant.db.get('enterprises',function(err,data){
  if(err && err.error == 'not_found') {
    cloudant.db.create('enterprises',function(err1,data1){
      if(err1) {
        console.log(err)
      } else {
        enterpriseDb = cloudant.db.use('enterprises')
        indexifyEnterpriseDb()
      }
    })
  } else {
    enterpriseDb = cloudant.db.use('enterprises')
    indexifyEnterpriseDb()
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

var indexifyProductDb = function() {
  var email_index = {name:'providerId', type:'json', index:{fields:['providerId','name','category','enterpriseId','ownerId','type']}}
  productsDb.index(email_index, function(er, response) {
    if (er) {
      console.log(er)
    }
    console.log('Index creation result: %s', response.indexes);
    console.log('Index creation result: %s', response.result);
    productsDb.index(function(er, result) {
      if (er) {
        throw er;
      }

      console.log('productsDb database has %d indexes', result.indexes.length);
      for (var i = 0; i < result.indexes.length; i++) {
        console.log('  %s (%s): %j', result.indexes[i].name, result.indexes[i].type, result.indexes[i].def);
      }
    });
  });

}

var indexifyEnterpriseDb = function() {
  var email_index = {name:'ownerId', type:'json', index:{fields:['ownerId','name','category']}}
  enterpriseDb.index(email_index, function(er, response) {
    if (er) {
      console.log(er)
    }
    console.log('Index creation result: %s', response.indexes);
    console.log('Index creation result: %s', response.result);
    enterpriseDb.index(function(er, result) {
      if (er) {
        throw er;
      }

      console.log('productsDb database has %d indexes', result.indexes.length);
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
app.use(express.static('node_modules'));
app.get('/session', function(req,res) {
  res.send(req.session)
})
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

app.post('/add_enterprise', function(req,res){
  console.log("asdas",req)
  enterpriseDb.find({selector:{name:req.body.name, ownerId: req.session.user._id}}, function(er, result) {
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
      enterpriseDb.insert(Object.assign({},req.body,{ownerId: req.session.user._id}),function(errr, body, headers) {
        if (errr) {
          console.log('[usersDb.insert] ', err.message)
          res.status(500).send({error:"try again"})
        }
        res.status(201).send(body)
      })
    } else {
      res.status(409).send()
    }
  });
})

app.put('/updateProfile', function(req, res) {
  usersDb.find({selector:{_id:req.body._id}}, function(er, result) {
    if (er) {
      return res.status(500).send(er)
    }
    if(result.docs.length === 0) {
      res.status(404).send({message:'no user found'})
    } else {
      console.log("updating Data",req.body)
      usersDb.insert(Object.assign({},req.body, {_rev:result.docs[0]._rev}), function(err, body, header) {
        if (err) {
          return res.status(500).send(err)
        }
        console.log(body)
        return res.status(200).send(body)
      })
    }
  })
})

app.get('/getProfile', function(req, res) {
  usersDb.find({selector:{_id:req.session.user._id}}, function(er, result) {
    if (er) {
      return res.status(500).send(er)
    }
    if(result.docs.length === 0) {
      return res.status(404).send({message:'no user found'})
    } else {
      return res.status(200).send(result.docs[0])
    }
  })
})

app.get('/getEnterprises', function(req, res) {
  enterpriseDb.find({selector:{ownerId:req.session.user._id}}, function(er, result) {
    if (er) {
      return res.status(500).send(er)
    }
    return res.status(200).send(result.docs)
  })
})

app.put('/updateProducts', function(req, res) {
  productsDb.find({selector:{_id:req.body._id}}, function(er, result) {
    if (er) {
      return res.status(500).send(er)
    }
    if(result.docs.length === 0) {
      res.status(404).send({message:'no user found'})
    } else {

      productsDb.insert(Object.assign({},req.body, {_rev:result.docs[0]._rev}), function(err, body, header) {
        if (err) {
          return res.status(500).send(err)
        }
        return res.status(200).send({_rev: body._rev})
      })
    }
  })
})

app.get('/getProfileProducts', function() {
  productsDb.find({selector:{providerId:req.body.providerId}}, function(er, result) {
    if (er) {
      return res.status(500).send(er)
    }
    if(result.docs.length === 0) {
      res.status(404).send({message:'no user found'})
    } else {
      return res.status(200).send(result.docs)
    }
  })
})

app.post('/addProducts', function(req, res) {
  productsDb.find({selector:{providerId:req.body.providerId, name: req.body.name}}, function(er, result) {
    if (er) {
      res.status(500).send(er)
    }
    console.log("asdf",{er,result})
    console.log("asdf",JSON.stringify(result))
    console.log('Found %d documents with name Alice', result.docs.length);
    for (var i = 0; i < result.docs.length; i++) {
      console.log('  Doc id: %s', result.docs[i]._id);
    }
    if(result.docs.length === 0) {
      productsDb.insert(req.body,function(errr, body, headers) {
        if (errr) {
          console.log('[productsDb.insert] ', err.message)
          res.status(500).send({error:"try again"})
        }
        res.status(201).send(body)
      })
    } else {
      res.status(409).send({message:"already producct exist please update same"})
    }
  });
})

app.get('/all_products', function(req, res) {
  productsDb.find({selector:{ownerId:req.session.user._id, type:'product'}}, function(er, result) {
    if (er) {
      res.status(500).send(er)
    }
    console.log("asdf",{er,result})
    console.log("asdf",JSON.stringify(result))
    console.log('Found %d documents with name Alice', result.docs.length);
    res.status(200).send(result.docs)
  });
})

app.put('/edit_product', function(req, res) {
  productsDb.find({selector:{_id:req.body._id}}, function(er, result) {
    if (er) {
      res.status(500).send(er)
    }
    console.log("asdf",{er,result})
    console.log("asdf",JSON.stringify(result))
    console.log('Found %d documents with name Alice', result.docs.length);
    for (var i = 0; i < result.docs.length; i++) {
      console.log('  Doc id: %s', result.docs[i]._id);
    }
    if(result.docs.length === 0) {
      res.status(404).send({message:"product not found"})
    } else {
      productsDb.insert(req.body,function(errr, body, headers) {
        if (errr) {
          console.log('[productsDb.insert] ', err.message)
          res.status(500).send({error:"try again"})
        }
        res.status(201).send(body)
      })

    }
  });
})

app.post('/add_product', function(req, res) {
  productsDb.find({selector:{ownerId:req.body.ownerId, name: req.body.name, type: 'product'}}, function(er, result) {
    if (er) {
      res.status(500).send(er)
    }
    console.log("asdf",{er,result})
    console.log("asdf",JSON.stringify(result))
    console.log('Found %d documents with name Alice', result.docs.length);
    for (var i = 0; i < result.docs.length; i++) {
      console.log('  Doc id: %s', result.docs[i]._id);
    }
    if(result.docs.length === 0) {
      productsDb.insert(req.body,function(errr, body, headers) {
        if (errr) {
          console.log('[productsDb.insert] ', err.message)
          res.status(500).send({error:"try again"})
        }
        res.status(201).send(body)
      })
    } else {
      res.status(409).send({message:"already producct exist please update same"})
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
      console.log('  Doc id: %s', result.docs[i]._id);
    }
    if(result.docs.length === 0) {
      res.status(404).send({message:'no user found'})
    } else {
      if (result.docs[0].password === req.body.password) {
        req.session.user = result.docs[0]
        res.status(200).send(result.docs[0])
      } else {
        res.status(401).send({message:'Invalid password'})
      }

    }
  });
});

app.post('/logout', function(req, res){
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
