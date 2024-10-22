function quickEscape() {
  window.location.href = "https://www.google.com"; // Redirect to Google (or any safe site)
}

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
      quickEscape();
  }
});