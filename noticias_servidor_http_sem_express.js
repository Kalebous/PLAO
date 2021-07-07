const http = require('http');

let server = http.createServer((req,res)=>{
let categoria = req.url;
 if(categoria == '/tecnologia'){
     res.end("<html><body>Noticias de Tecnologia</body></html");
 }else if(categoria == '/moda'){
    res.end("<html><body>Noticias de Moda</body></html");
 } else if(categoria == '/beleza'){
    res.end("<html><body>Noticias de Beleza</body></html");
 }
 console.log("Servidor em execução");

});
server.listen(3000);