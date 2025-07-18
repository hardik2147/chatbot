async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const message = input.value.trim();
  if (!message) return;

  const userBubble = document.createElement("div");
  userBubble.className = "user";
  userBubble.textContent = message;
  chatBox.appendChild(userBubble);

  input.value = "";

  const response = await fetch("https://hardikchatbot-git-main-hardik2147s-projects.vercel.app/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await response.json();

  const botBubble = document.createElement("div");
  botBubble.className = "bot";
  botBubble.textContent = data.reply || "Sorry, I couldn’t understand that.";
  chatBox.appendChild(botBubble);
  chatBox.scrollTop = chatBox.scrollHeight;
}

