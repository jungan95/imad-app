var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
                        'article-one':{
                    background: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-kfaxy3_fd11df31.jpeg?region=0%2C0%2C2048%2C760",
                    title: 'Miley Cyrus',
                    heading: 'How? Disney',
                    date: 'Aug 11 , 2017',
                    content:  `
                                <p>
                                    In 2004, Cyrus beat out 1,000 hopefuls to land the starring role of Miley Stewart on the hit Disney show Hannah Montana. The tween series features a young pop superstar (Montana) who hides her celebrity identity to be an everyday teen in real life (Stewart).
                                </p>
                                <p>
                                   To accommodate filming, the entire family moved to Los Angeles, California, with Billy Ray joining his daughter on screen as her fictional dad-manager. Her star on the rise, Cyrus released a successful Hannah Montana soundtrack album in 2006.
                                </p>
                                <p>
                                    In 2007, Cyrus's double album, Hannah Montana 2: Meet Miley Cyrus, launched a tour: "Best of Both Worlds." The concert series sold out in record time, and the show was extended by 14 dates to help placate disappointed fans. Her successful 3-D concert film collected $31.3 million during its opening weekend in February 2008.
                                </p> 
                                <p>
                                Also in 2009, Cyrus released the EP The Time of Our Lives, featuring the hit singles "Party in the U.S.A." and "When I Look at You," the former being the singer's most successful song to date, selling more than 5.38 million copies and earning a spot among the best-selling singles of all time.
                                </p>
                                <p>
                                Enthusiasm for Cyrus's TV alter ego remained strong for several years, as well. In April 2009, Hannah Montana: The Movie scored at the box office, bringing in more than $79 million. The young star followed that success with the release of a new album, 2010's Can't Be Tamed. That year, Cyrus also starred in the romantic drama The Last Song, a film based on a novel of the same name by Nicholas Sparks.
                                </p>
                                `
                    
                                   },
                        'article-two' :{
                            background:"http://digitalspyuk.cdnds.net/13/32/1600x800/landscape_showbiz-miley-cyrus-notion-2.jpg",
                             title: 'Miley Cyrus',
                            heading: 'So called "I want you back Miley" phase',
                            date: 'Aug 11 , 2017',
                            content:  `
                                         <p>
                                           In subsequent years, Cyrus sought to distance herself from her Hannah Montana persona. She cut her hair short and took to wearing edgy fashions as part of an effort to craft a new image. But no one was quite prepared for how far she would go: At the MTV Video Music Awards (VMAs) in August 2013, Cyrus stunned the audience with her raunchy performance of her single, "We Can't Stop." Around this time, she appeared nude in the video of a follow-up single, "Wrecking Ball." However, the swirling controversy seemed to bolster sales of Cyrus's fourth studio album, Bangerz, released in October 2013. Meanwhile, "Wrecking Ball" became her first U.S. single to top the pop charts, and earned her Video of the Year honors at the 2014 VMAs.   
                                           
                                    </p>
                                    <p>
                                    Declaring herself as a pansexual singer, she is at the forefront of many projects that raise awareness for different things like youth homelessness and LGBT acceptance.
                                    </p>
                                    <p>
                                    The Happy Hippie Foundation is a nonprofit organization founded by Miley Cyrus. Their mission is to rally young people to fight injustice facing homeless youth, LGBTQ youth and other vulnerable populations.
                                    </p>
                                    <p> For more information, <a href='http://www.happyhippies.org/#our-work'></a>
                                        `
                        },
                        'article-three':{
                            background:"http://www.etonline.com/media/photo/2017/05/24330622/1280_miley_cyrus_instagram_051117.jpg",
                            title: 'Miley Cyrus',
                            heading: 'Younger Now',
                            date: 'Aug 11 , 2017',
                            content:  `
                                         <p>
                                            After a gap of 4 years since her 'Bangerz' album release, Miley is all set to come back with another album. In an interview with Billboard, she declared herself clean and getting back to her roots. She released a song Malibu dedicating to her love Liam Hemsworth clearing all the rumours of them getting back together. Fans could not be more excited!
                                            
                                    </p>
                                    
                                    <p>
                                    She also announced that she will releasing her new album "Younger Now" on Sept. 29.
                                    Fans are expecting this album to be far away from hip-hop and more to be a country album.
                                    Stay Tuned!
                                    
                                        `
                        },
                        };



function createTemplate(data){
    var background=data.background;
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
    <body background= ${background}>
        <div class="container">
            <div>
                <a href='/'>Home</a>
            </div>
            <hr/>
            
            <div class="center text-big bold">
              <h3>  ${heading}
            </h3>
            </div>
            <div>
                ${date}
            </div>
            <div>
               <h3> ${content}</h3>
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
