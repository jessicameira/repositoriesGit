const express = require('express')
const nunjucks = require('nunjucks')
const { static } = require('express')
const search = require('./public/scripts/search')

const server = express()

server.use(express.urlencoded({extended: true}))
server.use(express.static("public"))

nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.get("/", function(req,res){
    const languages = ['javascript', 'python', 'php', 'elixir', 'c#']
    return res.render('index.html', {languages})
})
server.get("/repositories", function(req,res){
    return res.render('repositories.html')
})

server.get("/search-result", function(req,res){
    let repoList = search.repoview
    return res.render('search-result.html',{repoList})
})
server.listen(5000, function(){
    console.log("Server running")
})