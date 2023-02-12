function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
//save the theme in cookies
function saveTheme() {
    var element = document.body;
    var theme = element.classList.contains("dark-mode") ? "dark" : "light";
    Cookies.set("theme", theme);
}   
//load the theme from cookies
function loadTheme() {
    var theme = Cookies.get("theme");
    if (theme == "dark") {
        var element = document.body;
        element.classList.add("dark-mode");
    }
}
//load the theme on page load
loadTheme();
