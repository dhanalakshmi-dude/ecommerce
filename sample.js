document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const chatMessages = document.getElementById('chat-messages');
    
    // Add user's message to the chat
    const userMessage = document.createElement('div');
    userMessage.textContent = 'You: ' + userInput;
    userMessage.style.textAlign = 'right';  // Align user messages to the right
    chatMessages.appendChild(userMessage);
    
    // Bot's response (simple predefined logic)
    let botResponse = '';
    if (userInput.toLowerCase().includes('hello')) {
        botResponse = 'Bot: Hi there! How can I help you?';
    } else if (userInput.toLowerCase().includes('help')) {
        botResponse = 'Bot: Sure, I can assist with product questions.';
    } else {
        botResponse = 'Bot: I didn\'t understand that. Try saying "hello" or "help".';
    }
    
    const botMessage = document.createElement('div');
    botMessage.textContent = botResponse;
    botMessage.style.textAlign = 'left';  // Align bot messages to the left
    chatMessages.appendChild(botMessage);
    
    // Clear the input and scroll to the bottom
    document.getElementById('user-input').value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;  // Auto-scroll
});