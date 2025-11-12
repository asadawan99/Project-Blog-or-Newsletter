(function() {
  const iframe = document.createElement("iframe");
  iframe.src = "https://test-project-blog-or-newsletter.vercel.app/"; // replace with your Agent Kit deployment URL
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "400px";
  iframe.style.height = "600px";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";
  iframe.style.borderRadius = "12px";
  iframe.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
  document.body.appendChild(iframe);

  const button = document.createElement("button");
  button.innerText = "💬";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.width = "60px";
  button.style.height = "60px";
  button.style.borderRadius = "50%";
  button.style.border = "none";
  button.style.backgroundColor = "#4A90E2";
  button.style.color = "#fff";
  button.style.fontSize = "28px";
  button.style.cursor = "pointer";
  button.style.zIndex = "10000";
  button.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  document.body.appendChild(button);

  iframe.style.display = "none";

  button.onclick = function() {
    iframe.style.display = iframe.style.display === "none" ? "block" : "none";
  };
})();
