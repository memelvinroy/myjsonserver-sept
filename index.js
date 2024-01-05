// 1.import json server

const jsonServer = require('json-server') //importing using require

// 2.create json server

const mediaPlayerServer = jsonServer.create()

// 3.creating connection to db.json.it uses a method named router

const router = jsonServer.router('db.json')

// 4.creating a middleware

const middleware = jsonServer.defaults()

//5.use this middleware

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

const port =5000;
mediaPlayerServer.listen(port,()=>{
    console.log(`Server is up and running in port ${port}`);
})