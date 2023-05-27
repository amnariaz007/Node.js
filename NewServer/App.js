const http = require('http');
const fs = require('fs');
const port = 3000 

const server = http.createServer(( req, res )=> {

    res.writeHead(200, {'Content-type' : 'text/html'})
        res.end("This is my first server");
    });
   


server.listen( port, ( error ) => {
    if  ( error){
        console.log("There is something wrong ")
    } else {
        console.log("port is running on port " + port )
    }
});

