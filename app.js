var express = require('express');
var app = express();
var scraper = require('website-scraper');

scraper.scrape({
  urls: [
    'https://likelyloans.com/',	// Will be saved with default filename 'index.html' 
    {url: 'http://nodejs.org/your-credit-rating', filename: 'your-credit-rating.html'},
    {url: 'https://likelyloans.com/contact-us', filename: 'contact-us.html'}
  ],
  directory: './argon',
  subdirectories: [
    {directory: 'img', extensions: ['.jpg', '.png', '.svg']},
    {directory: 'js', extensions: ['.js']},
    {directory: 'css', extensions: ['.css']}
  ],
  sources: [
    {selector: 'img', attr: 'src'},
    {selector: 'link[rel="stylesheet"]', attr: 'href'},
    {selector: 'script', attr: 'src'}
  ],
  request: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19'
    }
  }
}).then(function (result) {
  console.log(result);
}).catch(function(err){
  console.log(err);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});