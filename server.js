var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
                        'article-one':{
                    title: 'Article One| Gunjan Singh',
                    heading: 'Article One',
                    date: 'Aug 6 , 2017',
                    content:  `
                                <p>
                                    Hello, my name is Gunjan Singh. Ermm.. Introduce yourself? Umm , yeah.. well.. Just a crazy girl who is still searching the purpose of her life.
                                </p>
                                <p>
                                    I am still not sure what page I would be making. I hope some new ideas would come up!
                                    Sometimes, i think i should stop all this and become a youtuber. But that needs brainstorming and all which I am too lazy to do.
                                </p>
                                <p>
                                    So, Welcome to My Spectacular and also weird World!
                                    By the way, Hello World! :D
                                </p> 
                                `
                    
                                   },
                        'article-two' :{
                             title: 'Article Two | Gunjan Singh',
                            heading: 'Article Two',
                            date: 'Aug 6 , 2017',
                            content:  `
                                         <p>
                                      This is my second article.           
                                    </p>
                                        `
                        },
                        'article-three':{
                            title: 'Article Three | Gunjan Singh',
                            heading: 'Article Three',
                            date: 'Aug 6 , 2017',
                            content:  `
                                         <p>
                                      This is my third article.           
                                    </p>
                                        `
                        },
                        };



function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading= data.heading;
    var content= data.content;
var htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body background="http://digitalspyuk.cdnds.net/16/27/1600x800/landscape-1467640897-mileycyrus.jpg">
        <div class="container">
            <div>
                <a href='/'>Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>

    ` ;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function (req,res){
  counter= counter+1;
  res.send(counter.toString());
});

app.get('/:articleName',function (req, res) {
    //articleName==article-one
    //articles[articleName]={} content object for article one
    var articleName= req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/logan.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'logan.jpg'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
