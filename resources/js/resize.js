// window.onload = () => {
//   resizeChat();
// };
// window.onresize = () => {
//   resizeChat();
// };
//
// function resizeChat() {
//   console.log('resize.js');
//   const chatHeight = document.getElementById('streamChat').offsetHeight;
//   const headerHeight = document.getElementById('streamHeaders').offsetHeight;
//   const totalHeight = chatHeight - headerHeight;
//   const chatColl = document.getElementsByClassName('streamChat');
//
//   console.log('chatBody height:', totalHeight);
//   console.log('collection:', chatColl);
//
//   for (let i = 0, j = chatColl.length; i < j; i++) {
//     console.log(`element ${i + 1}: ${chatColl[i]}`);
//     chatColl[i].style.height = `${totalHeight}px`;
//   }
// }

// function resizeAll() {
//   const streamChat = document.getElementById('streamChat');
//
//   const streamChatH = streamChat.offsetHeight();
//
//   main.style.height = `${streamChatH}px`;
// }
