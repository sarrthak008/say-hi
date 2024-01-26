

let notification = document.querySelector('#note')
var AIstatus=true
 
 notification.addEventListener('click',()=>{
     AIstatus=confirm('you want chat with AI..')
 })






let UserName = document.querySelector('#name');
let btn = document.querySelector('#a');
let page1 = document.querySelector('#page1')
var hope
btn.addEventListener('click', () => {
  if (UserName.value.length == 0) {
    alert('please enter your name');
  } else {
    page1.style.top = -100 + 'vh';
    hope = `${UserName.value}`

  }
})



let socket = io();

//code that add message in chtas secion...
function sendChat() {
  let inputMsg = document.querySelector('#input')
  let sendbtn = document.querySelector('#send')
  sendbtn.addEventListener('click', () => {
    if (inputMsg.value.length != 0) {

      const Msg = {
        name: `${hope}`,
        msg: `${inputMsg.value}`
      }


      //adding msg on screen....
      let chats = document.querySelector('#chats')
      let Sdiv = document.createElement('div')
      let Sp = document.createElement('p')
      let MyMsgDiv = document.createElement('div')
      Sdiv.classList.add('my-chat')
      Sp.classList.add('my-name')
      Sp.innerText = `${Msg.name}`
      MyMsgDiv.classList.add('msg-style')
      MyMsgDiv.innerText = `${Msg.msg}`

      Sdiv.append(Sp)
      Sdiv.append(MyMsgDiv)
      chats.appendChild(Sdiv)
      chats.scrollTop = chats.scrollHeight

        if(AIstatus==true){
                let codedMsg = Msg.msg.split(" ").join("")

                let url = `https://chatgpt.apinepdev.workers.dev/?question=+${codedMsg}+&state=girlfriend`
                fetch(url).then((resp) => {
                  return (resp.json())
                }).then((res) => {
                  let ans = res.answer.split('/n')[0];
                  ans = ans.replace('GF:', `AI`)
                  ans = ans.replace('BF:', 'AI')
                  ans = ans.replace('[Your Name]', 'Rossy')
                  ans = ans.replace('Nepcoder', 'CoderX')
                  const AImsg = {
                    name: 'Rossy',
                    msg: `${ans.slice(0, 30)}`
                  }
                  addReciveMsg(AImsg)
          
                })
          
         }


      inputMsg.value = ``;
      socket.emit('clientToServe', Msg);
    }
  })

}

sendChat()


socket.on('serverToClient', (recevieMsg) => {
  console.log(recevieMsg)
  addReciveMsg(recevieMsg)
})


function addReciveMsg(recevieMsg) {

  let chats = document.querySelector('#chats')
  let Rdiv = document.createElement('div')
  let Rp = document.createElement('p')
  let RecMsgDiv = document.createElement('div')
  Rdiv.classList.add('rece-chat')
  Rp.classList.add('my-name')
  Rp.innerText = `${recevieMsg.name}`
  RecMsgDiv.classList.add('rece-msg-style')
  RecMsgDiv.innerText = `${recevieMsg.msg}`
  Rdiv.append(Rp)
  Rdiv.append(RecMsgDiv)
  chats.appendChild(Rdiv)
  chats.scrollTop = chats.scrollHeight

}




