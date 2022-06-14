const fs = require("fs")
const http = require("http")

const home = fs.readFileSync("./Home.html", "utf-8")
const about = fs.readFileSync("./About.html", "utf-8")
const contact = fs.readFileSync("./Contact.html", "utf-8")

const server = http.createServer((req, res) => {
    const url = req.url
    if(url=="/home" || url=="/"){
        res.writeHead(200, {"Content-type" : "text/html"})
        res.end(home)
    }
    else if(url=="/about"){
        res.writeHead(200, {"Content-type" : "text/html"})
        res.end(about)
    }
    else if (url == "/contact"){
        res.writeHead(200, {"Content-type" : "text/html"})
        res.end(contact)
    }
    else{
        res.writeHead(404, {
            "Content-type": "text/html",
            "my-own-header": "Hello-world"
        })
        res.end("<h1>Page Not Found</h1>")
    }
    
})

server.listen(3000, () => {
    console.log("server is listening...")
})