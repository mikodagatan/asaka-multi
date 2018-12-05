window.onload = () => {
  resizeChat();
};
window.onresize = () => {
  resizeChat();
};

function resizeChat() {
  console.log('resize.js');
  const chatHeight = document.getElementById('chatBody').offsetHeight;
  const chatColl = document.getElementsByClassName('streamChat');

  console.log('chatBody height:', chatHeight);
  console.log('collection:', chatColl);

  for (let i = 0, j = chatColl.length; i < j; i++) {
    console.log(`element ${i + 1}: ${chatColl[i]}`);
    chatColl[i].style.height = `${chatHeight}px`;
  }
}

function resizeAll() {
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');
  const main = document.getElementById('main');

  const footerH = footer.offsetHeight();
  const headerH = header.offsetHeight();
  const windowH = window.offsetHeight();

  main.style.height = `${windowH - headerH - footerH}px`;
}
