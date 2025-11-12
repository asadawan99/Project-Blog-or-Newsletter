(function () {
  const CHATBOT_URL = "https://test-project-blog-or-newsletter.vercel.app/"; // replace with your Vercel chatbot link
  const THEME_COLOR = "#2563eb"; // your brand color
  const TEXT_COLOR = "#ffffff";

  // === CREATE IFRAME (hidden by default) ===
  const iframe = document.createElement("iframe");
  Object.assign(iframe.style, {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "420px",
    height: "580px",
    border: "none",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
    zIndex: "9999",
    display: "none",
    opacity: "0",
    transform: "translateY(20px)",
    transition: "all 0.3s ease",
  });
  iframe.src = CHATBOT_URL;
  document.body.appendChild(iframe);

  // === FOOTER CHAT DOCK ===
  const dock = document.createElement("div");
  dock.innerHTML = `
    <div style="
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: ${THEME_COLOR};
      color: ${TEXT_COLOR};
      border-radius: 12px;
      padding: 10px 16px;
      box-shadow: 0 6px 20px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      cursor: pointer;
      z-index: 10000;
      transition: all 0.25s ease;
      font-family: system-ui, sans-serif;
    ">
      <img src="https://cdn-icons-png.flaticon.com/512/4712/4712104.png" alt="AI" style="width:28px; height:28px; border-radius:50%; margin-right:10px;">
      <span style="font-weight:500;">Chat with AI Assistant 💬</span>
    </div>
  `;
  document.body.appendChild(dock);

  const dockEl = dock.querySelector("div");
  dockEl.onmouseover = () => (dockEl.style.transform = "scale(1.05)");
  dockEl.onmouseout = () => (dockEl.style.transform = "scale(1)");

  // === TOGGLE CHAT ===
  let open = false;
  dockEl.onclick = () => {
    open = !open;
    if (open) {
      iframe.style.display = "block";
      setTimeout(() => {
        iframe.style.opacity = "1";
        iframe.style.transform = "translateY(0)";
      }, 20);
      dockEl.querySelector("span").textContent = "Close Chat ✖️";
    } else {
      iframe.style.opacity = "0";
      iframe.style.transform = "translateY(20px)";
      setTimeout(() => (iframe.style.display = "none"), 250);
      dockEl.querySelector("span").textContent = "Chat with AI Assistant 💬";
    }
  };
})();
