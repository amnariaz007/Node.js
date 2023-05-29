const express = require('express');
const app = express();
const path = require('path');


// console.log(__dirname);

 console.log(path.join(__dirname, '../public'))

const staticpath=  path.join(__dirname, '../public');

app.use(express.static(staticpath));

app.get('/', (req, res)=> {
    res.send("This is express ");
})

app.listen(3000, (err ) => {
    if (err){
        console.log("theres's an error")
    }else {
        console.log("this is port 3000");
    }
})
