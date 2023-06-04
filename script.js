document.getElementById('chat-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const messageInput = document.getElementById('message-input');
  const messageText = messageInput.value.trim();
  
  if (messageText !== '') {
    const chatScreen = document.querySelector('.chat-screen');
    const chatMessage = document.createElement('div');
    chatMessage.classList.add('chat-message');
    chatMessage.innerHTML = `
      <div class="message-bubble">
        <p>${messageText}</p>
      </div>
    `;
    chatScreen.appendChild(chatMessage);

    messageInput.value = '';
    messageInput.focus();
  }
});
