const http = require('http');
const fs = require('fs');
const port = 3000 

const server = http.createServer(( req, res )=> {

    res.writeHead(200, {'Content-type' : 'text/html'})
    fs.readFile('server.html', (error, data )=> {
        if (error){
            res.writeHead(404)
            res.write("there's sowmthing wrorng")
        }else {
            res.write(data);
        }
        res.end()
    })
   
});

server.listen( port, ( error ) => {
    if  ( error){
        console.log("There is something wrong ")
    } else {
        console.log("port is running on port " + port )
    }
});

