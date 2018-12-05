window.onload = () => {
  resizeChat();
};
window.onresize = () => {
  resizeChat();
};

function resizeChat() {
  console.log('resize.js');
  const chatHeight = document.getElementById('streamChat').offsetHeight;
  const chatColl = document.getElementsByClassName('streamChat');

  console.log('chatBody height:', chatHeight);
  console.log('collection:', chatColl);

  for (let i = 0, j = chatColl.length; i < j; i++) {
    console.log(`element ${i + 1}: ${chatColl[i]}`);
    chatColl[i].style.height = `${chatHeight}px`;
  }
}

// function resizeAll() {
//   const streamChat = document.getElementById('streamChat');
//
//   const streamChatH = streamChat.offsetHeight();
//
//   main.style.height = `${streamChatH}px`;
// }
