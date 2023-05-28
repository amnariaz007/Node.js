const http = require('http');
const fs = require('fs');
const port = 3000 


const server = http.createServer(( req, res )=> {

    res.writeHead(200, {'Content-Type': 'text/html'});
     
    const url = req.url;
     
    if(url ==='/about') {
        res.write(' Welcome to about us page');
        res.end();
    }
    else if(url ==='/contact') {
        res.write(' Welcome to contact us page');
        res.end();
    }
    else {
        res.write('Hello World!');
        res.end();
    }
})


// module.exports = {
//     handleRequest : function( req, res ) {
//         res.writeHead(200, {'Content-type' : 'text/html'})
//         const path = url.parse(req.url).pathname;
//         switch(path){
//             case '/':
//             renderHTML('./login.html', res)
//             break;
//             case 'about' :
//                 renderHTML('./about.html', res)
//                 break;
//                 default:
//                 res.writeHead(404);
//                 res.write("page not founf");
//                 res.end();
//         }
//     }
// }

server.listen( port, ( error ) => {
    if  ( error){
        console.log("There is something wrong ")
    } else {
        console.log("port is running on port " + port )
    }
});
