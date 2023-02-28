function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  document.cookie = "darkmode=" + (document.body.classList.contains('dark-mode') ? 'true' : 'false');
}

window.onload = function() {
  if (document.cookie.indexOf('darkmode=true') !== -1) {
      document.body.classList.add('dark-mode');
  }
}