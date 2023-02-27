function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");  
  
}





// Function to set a cookie
function setCookie(name,value,days) {
  let expires = "";
  if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

// Get dark mode toggle element
const darkModeToggle = document.getElementById('darkModeToggle');

// Check for saved color mode preference
const savedColorMode = getCookie('colorMode');

if (savedColorMode === 'dark') {
 document.body.classList.add('dark-mode');
 darkModeToggle.checked = true;
}

// Add event listener to dark mode toggle
darkModeToggle.addEventListener('change', () => {
 document.body.classList.toggle('dark-mode'); 
 
 // Save color mode preference in cookie
 if (document.body.classList.contains('dark-mode')) {
     setCookie('colorMode', 'dark', 365);
 } else {
     setCookie('colorMode', 'light', 365);
 }
});