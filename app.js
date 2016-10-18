var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8888;
var dist = __dirname + '/argon_lite';

app.use(express.static('argon_lite'));

app.get('/', function(req, res) {
    res.sendFile(path.join(dist + '/index.html'));
});

app.get('/apply', function(req, res) {
    res.sendFile(path.join(dist + '/apply.html'));
});

app.get('/your-credit-rating', function(req, res) {
    res.sendFile(path.join(dist + '/your-credit-rating.html'));
});

app.get('/contact-us', function(req, res) {
    res.sendFile(path.join(dist + '/contact-us.html'));
});

app.get('/resume-application', function(req, res) {
    res.sendFile(path.join(dist + '/resume-application.html'));
});

app.get('/privacy-policy', function(req, res) {
    res.sendFile(path.join(dist + '/privacy-policy.html'));
});

app.get('/sitemap', function(req, res) {
    res.sendFile(path.join(dist + '/sitemap.html'));
});

app.get('/complaints-procedure', function(req, res) {
    res.sendFile(path.join(dist + '/complaints-procedure.html'));
});

app.get('/terms-of-use', function(req, res) {
    res.sendFile(path.join(dist + '/terms-of-use.html'));
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(dist + '/404.html'));
}).listen(port);

console.log('server running om port: ' + port);