const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const messages = document.getElementById("chat-messages");
const typing = document.getElementById("typing");
const clearButton = document.getElementById("clear-chat");

const knowledgeBase = [
  {
    intent: "greeting",
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
    response: "Hello! 😊 How can I help you today? You can ask about courses, internships, deadlines, certificates, or project submissions."
  },
  {
    intent: "course_information",
    keywords: ["course", "courses", "learning path", "syllabus", "learn"],
    response: "Our learning path may include Artificial Intelligence, Machine Learning, chatbot development, web development, and practical projects. Check your course dashboard for the exact modules and schedule."
  },
  {
    intent: "internship",
    keywords: ["internship", "intern", "work experience", "job"],
    response: "For internship-related help, review the internship dashboard and read the eligibility, task, and submission instructions. Never pay an unknown person for an internship without verifying the organisation and its terms."
  },
  {
    intent: "deadline",
    keywords: ["deadline", "due date", "last date", "overdue", "when submit", "date"],
    response: "Please check the due date shown on your course dashboard because deadlines can vary by task. If a task is marked overdue, submit it as soon as possible and contact the course administrator if you need an extension."
  },
  {
    intent: "certificate",
    keywords: ["certificate", "certification", "completion certificate"],
    response: "Certificates are usually unlocked after you complete the required course steps and your submissions are approved. Check your dashboard for pending tasks or review status."
  },
  {
    intent: "project_submission",
    keywords: ["submit", "submission", "project", "github", "git link", "drive link", "upload"],
    response: "To submit a project: (1) keep all project files together, (2) upload the files to a GitHub repository or Google Drive, (3) make sure the link opens for reviewers, (4) copy the repository/folder link, and (5) paste it into the course submission form and choose Submit for Review. For GitHub, upload the actual project files—not only a ZIP if the task expects source files."
  },
  {
    intent: "chatbot_help",
    keywords: ["chatbot", "intent", "entity", "conversation flow", "conversational ai"],
    response: "A chatbot receives a message, identifies the user's intent, extracts useful entities, selects a response, and continues the conversation. This demo uses keyword-based intent recognition and predefined responses in JavaScript."
  },
  {
    intent: "technical_issue",
    keywords: ["error", "not working", "problem", "issue", "bug", "can't", "cannot", "failed"],
    response: "Let's troubleshoot it. Please check your internet connection, refresh the page, and confirm that all project files (index.html, style.css, and script.js) are in the same folder. If the issue continues, tell me what you clicked and what message appeared."
  },
  {
    intent: "thanks",
    keywords: ["thank you", "thanks", "thx"],
    response: "You're welcome! 😊 If you have another question, feel free to ask."
  },
  {
    intent: "goodbye",
    keywords: ["bye", "goodbye", "see you"],
    response: "Goodbye! All the best with your learning and project submission. 👋"
  }
];

function normalise(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, " ").replace(/\s+/g, " ").trim();
}

function detectIntent(userText) {
  const cleaned = normalise(userText);
  let bestMatch = null;
  let bestScore = 0;

  for (const item of knowledgeBase) {
    let score = 0;
    for (const keyword of item.keywords) {
      const key = normalise(keyword);
      if (cleaned === key) score += 3;
      else if (cleaned.includes(key)) score += key.includes(" ") ? 2 : 1;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }
  return bestScore > 0 ? bestMatch : null;
}

function addMessage(text, sender) {
  const row = document.createElement("div");
  row.className = `message ${sender}`;

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = sender === "bot" ? "🎓" : "🙂";

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  const time = document.createElement("time");
  time.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  bubble.append(paragraph, time);
  row.append(avatar, bubble);
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
}

function getResponse(text) {
  const result = detectIntent(text);
  if (result) return result.response;
  return "I'm not sure I understood that. Could you rephrase your question? Try asking about courses, internships, deadlines, certificates, project submission, or chatbot development.";
}

function sendMessage(text) {
  const message = text.trim();
  if (!message) return;
  addMessage(message, "user");
  input.value = "";
  typing.hidden = false;
  input.disabled = true;

  window.setTimeout(() => {
    typing.hidden = true;
    addMessage(getResponse(message), "bot");
    input.disabled = false;
    input.focus();
  }, 450);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage(input.value);
});

document.querySelectorAll("[data-message]").forEach((button) => {
  button.addEventListener("click", () => sendMessage(button.dataset.message));
});

clearButton.addEventListener("click", () => {
  messages.replaceChildren();
  addMessage("Conversation cleared. Hello again! What would you like help with?", "bot");
  input.focus();
});
