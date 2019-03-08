function chatbox() {
    var textmessagge = document.getElementById('chat');
    var parentElement = document.querySelector('.first');
    var childP = document.createElement('p');
    childP.textContent = textmessagge.value;
    parentElement.appendChild(childP);

}
