const http = require("http");

const server = http.createServer((req, res)=>{

    res.end("Welcome to My 1st Node JS Server");

});

server.listen(3000, ()=>{
    console.log("Check Port no 3000");
});