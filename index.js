const http = require('node:http');
const fs = require('node:fs');
const url = require('node:url');

const port = 8080;
const myUrl = new URL('localhost:8080')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });

    if(req.url === '/'){
        fs.readFile('./index.html', 'utf8', (err, data) => {
            if(err){
                console.log(err);
                return;
            }
            else{
                res.write(data);
                console.log(req.url);
            }
            res.end();
        });
    }
    else if(req.url === '/about'){
        fs.readFile('./about.html', 'utf8', (err, data) => {
            if(err){
                console.log(err);
                return;
            }
            res.write(data);
            res.end();
        })
    }

    else if(req.url === '/contact-me'){
        fs.readFile('./contact-me.html', 'utf8',(err, data) => {
            if(err){
                console.log(err);
                return;
            }
            res.write(data);
            res.end();
        })
    }
    else{
        fs.readFile('./404.html', 'utf8', (err, data) => {
            if(err){
                console.log(err);
                return;
            }
            res.write(data);
            res.end();
        })
    }
    
});

server.listen(port, (error) => {
    if(error){
        console.log("Error occured");
    }
    else{
        console.log(`Server running at port ${port}`);
    }
})