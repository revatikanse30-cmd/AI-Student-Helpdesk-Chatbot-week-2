# AI Student Helpdesk Chatbot — Week 2

## Project overview
A responsive web-based student helpdesk chatbot that answers common questions about courses, internships, deadlines, certificates, project submissions, and chatbot concepts.

## Week 2 learning objectives
- Understand chatbots and conversational AI.
- Recognise user intent from a message.
- Use keyword matching as a simple intent-recognition technique.
- Return appropriate responses using a conversation flow.
- Build and test a working chatbot interface.

## Features
- Responsive chat interface for desktop and mobile.
- Quick-reply buttons for common student questions.
- Keyword-based intent recognition.
- Predefined responses for common helpdesk topics.
- Fallback response for unknown questions.
- Clear-conversation button.
- No API key or backend required.

## Files
- `index.html` — page structure and chat interface.
- `style.css` — layout, colours, and responsive styling.
- `script.js` — intent recognition, responses, and chat behaviour.
- `PROJECT_REPORT.md` — project documentation and test cases.

## How to run
1. Download or clone this repository.
2. Keep all three main files in the same folder.
3. Open `index.html` in a modern browser.
4. Type a question or select a quick-reply button.

## How intent recognition works
The message is converted to lowercase, punctuation is removed, and the program compares it with keyword lists. The intent with the highest match score is selected. If no keyword matches, a fallback response is returned.

## Example test questions
- `Hi`
- `Tell me about internships`
- `When is the deadline?`
- `How do I get my certificate?`
- `How do I submit my project on GitHub?`
- `What is intent recognition?`
- `This is not working`
- `Thank you`

## Limitations and future scope
This is an educational prototype. It uses predefined responses and keyword matching rather than a trained AI model. Future improvements could include an AI API, multilingual support, a database of verified course information, admin tools, and secure student authentication.

## Author
Student project for Artificial Intelligence — Week 2.
