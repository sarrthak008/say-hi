const express=require("express");
const app=express();
const mySrver=require('http').createServer(app)
const io=require("socket.io")(mySrver)
const PORT=process.env.PORT || 3000;

app.set("view engine","ejs");
app.use(express.static('./public'))


app.get("/",(req,res)=>{
    res.render('index')
})

io.on('connection',(socket)=>{
    //console.log('user connect..')
     socket.on('clientToServe',(Msg)=>{
       // console.log(Msg)
        socket.broadcast.emit('serverToClient',Msg)
     })

})

mySrver.listen(PORT,()=>{console.log(`server listen on ${PORT}`)});