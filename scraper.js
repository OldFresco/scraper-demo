var scraper = require('website-scraper');
var Spinner = require('cli-spinner').Spinner;

var loadingIcon = new Spinner('Scraping.. %s');

loadingIcon.setSpinnerString('|/-\\');
loadingIcon.start();

scraper.scrape({
    urls: [
        'https://likelyloans.com/', // Will be saved with default filename 'index.html' 
        { url: 'https://likelyloans.com/your-credit-rating', filename: 'your-credit-rating.html' },
        { url: 'https://likelyloans.com/apply', filename: 'apply.html' },
        { url: 'https://likelyloans.com/contact-us', filename: 'contact-us.html' },
        { url: 'https://likelyloans.com/resume-application', filename: 'resume-application.html' },
        { url: 'https://likelyloans.com/terms-of-use', filename: 'terms-of-use.html' },
        { url: 'https://likelyloans.com/privacy-policy', filename: 'privacy-policy.html' },
        { url: 'https://likelyloans.com/sitemap', filename: 'sitemap.html' },
        { url: 'https://likelyloans.com/complaints-procedure', filename: 'complaints-procedure.html' },
        { url: 'https://likelyloans.com/foo', filename: '404.html' }
    ],
    directory: './argon_lite',
    subdirectories: [
        { directory: 'img', extensions: ['.jpg', '.png', '.svg'] },
        { directory: 'js', extensions: ['.js'] },
        { directory: 'css', extensions: ['.css'] }
    ],
    sources: [
        { selector: 'img', attr: 'src' },
        { selector: 'link[rel="stylesheet"]', attr: 'href' },
        { selector: 'script', attr: 'src' }
    ],
    request: {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19'
        }
    }
}).then(function(result) {
    console.log('Successfully scraped argon!');
    loadingIcon.stop();
    //console.log(result);
}).catch(function(err) {
    console.log(err);
});