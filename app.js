const http = require("http");
const port = 5566
const generateContent = require("./modules/generateConent");
const serveFile = require("./modules/serveFile");
const { fstat } = require("fs");

const server = http.createServer((req,res)=>{

    if(req.url === "/favicon.ico") return serveFile(req,res, req.url)
    if(req.url === "/styles.css") return serveFile(req,res, req.url)
    
    res.writeHead(200);
    const url = new URL(req.headers.host+req.url) 
    let page = url.searchParams.get("page")
    let count = url.searchParams.get("count")
    
    let additional = []
    url.searchParams.forEach((value,name) =>{
        additional.push(`<li>${name}:${value}</li>`)
    })
    
    let wrapper =  generateContent({
        page,
        count, 
        additional,
        
    })  
    res.write(wrapper)
    res.end()
})
server.listen(port)




















