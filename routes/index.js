var express = require('express');
var crypto = require('crypto'),
    User = require('../models/user.js');

module.exports = function(app){
	app.get('/', function(req, res) {
    	res.render('index', { title: 'Homepage' });
	});
	
	app.get('/reg',function(req,res){
		res.render('reg',{title: 'Register' });
	});
	
	app.post('/reg',function(req,res){
    res.send("post get!");
  });
	
	app.get('/login',function(req,res){
		res.render('login',{title: 'Login' });
	});
	
	app.post('/login',function(req,res){

	});
	
	app.get('/post',function(req,res){
		res.render('post',{title:'Post'});
	});
	
	app.post('/post',function(req,res){

	});
	
	app.get('logout',function(req,res){
	});
};
/* GET home page. */


