# Day #2

### CodeByte GPT Bot
Here is a template for a chatbot project, structured similarly to your Pixel Art Generator project documentation. This includes sections like Introduction, Features, Getting Started, Usage, Contributing, License, and Live Demo.



# CodeByte GPT bot

![Chatbot](screenshot.png)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Live Demo](#live-demo)

## Introduction
The **Chatbot** is a web-based application that allows users to interact with an AI chatbot. It provides a seamless way to communicate with a bot, simulating human-like conversation. The bot can respond to user inputs and provide relevant replies.

## Features
- Interactive chat interface
- Real-time message sending and receiving
- User and bot avatars
- Loading indicators for bot responses
- Error handling for API issues
- Responsive design for both desktop and mobile devices

## Getting Started
### Prerequisites
To run the Chatbot, you need a modern web browser.

### Installation
1. Clone the repository:
   ```bash
   git clone https://moiz-codebyte.github.io/100-days-of-javascript/Day%20%232%20-%20CodeByte%20GPT%20Bot.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Day%20%232%20-%20CodeByte%20GPT%20Bot
   ```
3. Open `index.html` in your web browser.

### Generating Groq API Key
1. Visit the [Groq API Key Generation](https://www.groq.com/api-keys) page.
2. Log in or create an account.
3. Generate a new API key.
4. Copy the generated API key.

5. Replace `YOUR-GROQ-API-KEY` in `script.js` with your Groq API key:
   ```javascript
   const options = {
       method: 'POST',
       headers: {
           'content-type': 'application/json',
           'Authorization': 'Bearer YOUR-GROQ-API-KEY',
       },
       body: JSON.stringify({
           messages: [{ role: 'user', content: message }],
           model: 'llama3-8b-8192'
       })
   };
   ```



## Usage
1. Type your message in the input field at the bottom of the chat interface.
2. Click the **Send** button or press **Enter** to send your message.
3. The bot will respond to your message after a short delay.


## Contributing
Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to create a pull request or open an issue.

### Steps to Contribute
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Live Demo
You can see the CodeByte gpt bot live at [Link](https://moiz-codebyte.github.io/100-days-of-javascript/Day%20%232%20-%20CodeByte%20GPT%20Bot/)

---
