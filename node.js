const http = require("http");

http.createServer((req, res)=>{
    res.writeHead(200,{
        'Content-type':'text/plain'
    });
    res.write('SERVIDOR DO NODE JS RODANDO COM SUCESSO!')
    res.end();
}).listen(3000);