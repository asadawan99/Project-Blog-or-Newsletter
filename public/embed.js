(function () {
  // --- CONFIGURATION ---
  const CHATBOT_URL = "https://test-project-blog-or-newsletter.vercel.app/"; // <-- replace with your deployed agent link
  const WIDGET_COLOR = "#2563eb"; // Tailwind blue-600
  const BUTTON_SIZE = "60px";

  // --- CREATE CHAT IFRAME ---
  const iframe = document.createElement("iframe");
  Object.assign(iframe.style, {
    position: "fixed",
    bottom: "90px",
    right: "25px",
    width: "380px",
    height: "520px",
    border: "none",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
    zIndex: "9999",
    transition: "all 0.3s ease",
    display: "none",
  });
  iframe.src = CHATBOT_URL;
  document.body.appendChild(iframe);

  // --- CREATE FLOATING BUTTON ---
  const button = document.createElement("button");
  button.innerHTML = "💬";
  Object.assign(button.style, {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: "50%",
    border: "none",
    backgroundColor: WIDGET_COLOR,
    color: "white",
    fontSize: "26px",
    cursor: "pointer",
    zIndex: "10000",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "all 0.2s ease-in-out",
  });
  document.body.appendChild(button);

  // --- BUTTON HOVER EFFECT ---
  button.onmouseover = () => {
    button.style.transform = "scale(1.1)";
  };
  button.onmouseout = () => {
    button.style.transform = "scale(1)";
  };

  // --- TOGGLE CHAT WIDGET ---
  let isOpen = false;
  button.onclick = () => {
    isOpen = !isOpen;
    iframe.style.display = isOpen ? "block" : "none";
    button.innerHTML = isOpen ? "✖️" : "💬";
  };

  // --- OPTIONAL: AUTO-CLOSE WHEN CLICKING OUTSIDE ---
  document.addEventListener("click", (e) => {
    if (
      isOpen &&
      !iframe.contains(e.target) &&
      !button.contains(e.target)
    ) {
      iframe.style.display = "none";
      button.innerHTML = "💬";
      isOpen = false;
    }
  });
})();
