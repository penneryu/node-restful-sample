var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:32768/jsonAPI');

var User = require('./user')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();

router.use(function(req, res, next) {
	console.log('Something is happening.');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'Sucessfully Posted a test message.' });		
});

router.route('/users').post(function(req, res) {
	var user = new User();
	
	user.twitter_id = req.body.twitter_id;
	user.name = req.body.name;
	user.age = req.body.age;

	user.save(function(err) {
		if (err) {
			res.status(500).json({ message: err });
		} else { 
			res.json({ message: 'User created!' });
		}
	});
}).get(function(req, res) {
	User.find(function(err, users) {
		if (err) {
			res.status(500).json({ message: err });
		} else {
			res.json(users);
		}
	});	
});

router.route('/users/:user_id').get(function(req, res) {
	User.findById(req.params.user_id, function(err, user) {
		if (err) {
			res.status(500).json({ message: err });
		} else if (user == null) {
			res.status(404).json({ message: 'User not found!'});
		} else {
			res.json(user);
		}
	});		
}).put(function(req, res) {
	User.findById(req.params.user_id, function(err, user) {
		if (err) {
			res.status(500).json({ message: err});
		} else if (user == null) {
			res.status(404).json({ message: 'User not found!'});
		} else {
			var twitter_id = req.body.twitter_id;
			if (twitter_id != null) {
				user.twitter_id = req.body.twitter_id;
			}
			user.name = req.body.name;
			user.age = req.body.age;

			user.save(function(err) {
				if (err) {
					res.status(500).json({ message: err });
				} else { 
					res.json({ message: 'User updated!' });
				}
			});
		}
	});		
}).delete(function(req, res) {
	User.remove({_id: req.params.user_id}, function(err, user) {
		if (err) {
			res.status(500).json({ message: err });
		} else if (user == null) {
			res.status(404).json({ message: 'User not found!'});
		} else {
			res.json({ message: 'Successfully deleted!' });
		}
	});	
});


app.use('/api', router);

app.listen(port);
console.log('listen on port ' + port);

