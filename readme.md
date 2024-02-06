## ʜᴇʏ ᴛʜɪs ɪs sɪᴍᴘʟᴇ ᴄʜᴀᴛ ᴡᴇʙ ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴ [sᴀʏ ʜᴇʟʟᴏ]

### ᴛʜᴇʀᴇ ɪ ᴍ ʟᴇᴀʀɴ ʟᴏᴛ ᴏғ ᴛʜɪɴɢs ʟɪᴋᴇ 
  > ɴᴏᴅᴇ <br>
  > ᴇxᴘʀᴇss  <br>
  > sᴏᴄᴋᴇᴛ.ɪᴏ  <br>

<hr>

## Socket.IO  <br>

#### is an event-driven library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers. It consists of two components: a client, and a server. Both components have a nearly identical API.

<hr>

##### ᴄᴏᴅᴇ ᴛʜᴀᴛ ʜᴀɴᴅᴀʟᴇ ᴍᴇssᴀɢᴇ ᴄʟɪᴇɴᴛ ᴛᴏ sᴇʀᴠᴇʀ 🔖

`io.on('connection',(socket)=>{
    console.log('user connect..')
     socket.on('clientToServe',(Msg)=>{
        console.log(Msg)
        socket.broadcast.emit('serverToClient',Msg)
     })

})`