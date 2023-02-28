function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  document.cookie = "darkmode=" + (document.body.classList.contains('dark-mode') ? 'true' : 'false');
}

window.onload = function() {
  if (document.cookie.indexOf('darkmode=true') !== -1) {
      document.body.classList.add('dark-mode');
  }
}
    // Check if the cookie has already been set
    if (document.cookie.indexOf('cookieAccepted=true') === -1) {
      // If not, display the cookie banner
      var cookieBanner = document.getElementById('cookie-banner');
      cookieBanner.style.display = 'block';
    
      // When the user clicks the accept button, set the cookie and hide the banner
      var acceptButton = document.getElementById('accept-cookie');
      acceptButton.addEventListener('click', function() {
        document.cookie = 'cookieAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
        cookieBanner.style.display = 'none';
      });
    }