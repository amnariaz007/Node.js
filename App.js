const http = require('http');
const port = 3000 

const server = http.createServer(( req, res )=> {
    res.end("This is my first node server");
});

server.listen( port, ( error ) => {
    if  ( error){
        console.log("There is something wrong ")
    } else {
        console.log("port is running on port " + port )
    }
});