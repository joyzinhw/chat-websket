import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js';

const socket = io();
const messageList = document.getElementById('messages');
const messageInput = document.getElementById('input');
const messageForm = document.getElementById('form');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const messageContent = messageInput.value.trim();
  if (messageContent) {
	socket.emit('message', {
	  room_id: '6492e96d95d2039eb9ce0805',
	  message: messageContent,
	});
  }
  messageInput.value = '';
  const messageItem = document.createElement('li');
  messageItem.textContent = messageContent;
  messageList.appendChild(messageItem);
});

socket.on('room_message', (message) => {
  const messageItem = document.createElement('li');
  messageItem.textContent = message;
  messageList.appendChild(messageItem);
});
socket.on('connect', () => {
  socket.emit('join_room', '6492e96d95d2039eb9ce0805');
});