# Project Report: AI Student Helpdesk Chatbot

## 1. Introduction
Students frequently need quick answers about courses, internship tasks, deadlines, certificates, and project submissions. An AI Student Helpdesk Chatbot provides a simple interface where students can ask questions and receive instant responses.

## 2. Problem statement
Students may spend time searching different pages or waiting for help with routine questions. The goal is to create a lightweight chatbot prototype that recognises common question categories and returns relevant guidance.

## 3. Objectives
1. Create a clear and user-friendly chatbot interface.
2. Demonstrate conversational AI concepts.
3. Implement basic intent recognition using keywords.
4. Provide predefined answers for common student queries.
5. Test the chatbot with different types of questions.

## 4. Tools and technologies
- HTML5: structure of the web page.
- CSS3: design and responsive layout.
- JavaScript: intent detection, message handling, and response generation.
- Web browser: running and testing the project.
- GitHub: source-code hosting and project sharing.

## 5. System design
The chatbot follows this simple conversation flow:

1. The student types a message or selects a quick-reply option.
2. JavaScript normalises the message by converting it to lowercase and removing punctuation.
3. The program compares words in the message with keywords assigned to each intent.
4. The intent with the highest matching score is selected.
5. The associated predefined response is displayed.
6. If no intent matches, a fallback response asks the student to rephrase the question.

## 6. Intents and sample responses

| Intent | Example user message | Purpose |
|---|---|---|
| Greeting | “Hello” | Welcome the student |
| Course information | “What courses are available?” | Provide general course guidance |
| Internship | “Tell me about internships” | Explain where to check internship information |
| Deadline | “When is the last date?” | Direct the student to the dashboard |
| Certificate | “How do I get my certificate?” | Explain completion and review status |
| Project submission | “How do I upload to GitHub?” | Give basic submission steps |
| Chatbot help | “What is intent recognition?” | Explain chatbot concepts |
| Technical issue | “The page is not working” | Suggest initial troubleshooting |
| Thanks | “Thank you” | Respond politely |
| Goodbye | “Bye” | End the conversation politely |

## 7. Implementation
The interface is created with HTML, styled with CSS, and powered by JavaScript. The JavaScript knowledge base stores intents, keywords, and responses. A scoring function compares the user's message against these keywords. DOM methods create message bubbles safely using `textContent`, and event listeners handle form submission, quick replies, and clearing the conversation.

## 8. Testing

| Test input | Expected result |
|---|---|
| `Hi` | Greeting response |
| `Tell me about internships` | Internship guidance |
| `When is the deadline?` | Deadline guidance |
| `How do I get my certificate?` | Certificate guidance |
| `How do I submit my project on GitHub?` | Project submission steps |
| `What is intent recognition?` | Chatbot explanation |
| `The page is not working` | Troubleshooting guidance |
| `Thank you` | Polite acknowledgement |
| `A question outside the knowledge base` | Fallback response |

## 9. Results
The prototype responds to common student-helpdesk queries, offers quick-reply buttons, and supports a responsive layout. The application can run locally in a browser without installing packages or configuring an API key.

## 10. Limitations
- The chatbot does not understand every natural-language variation.
- Responses are predefined and may not reflect the latest official information.
- It does not store conversations or connect to a student database.
- It is not connected to an external AI service.

## 11. Future enhancements
- Integrate a language-model API with appropriate privacy safeguards.
- Add multilingual support.
- Connect a verified database of course details and deadlines.
- Add administrator tools to update responses.
- Add feedback collection and analytics.

## 12. Conclusion
The AI Student Helpdesk Chatbot demonstrates the basic concepts of conversational AI, intent recognition, response selection, and conversation flow. It offers a foundation that can be expanded into a more intelligent student-support system.

## 13. References
- MDN Web Docs: HTML, CSS, and JavaScript documentation.
- GitHub Docs: repository creation and file upload guidance.
