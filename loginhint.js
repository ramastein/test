{{document.addEventListener('DOMContentLoaded', function() {
if(window.location.href.indexOf("/login?from=") !== -1)
{ var hint=document.createTextNode("Hint: Use your XXXXXX credentials to login."); var node = document.getElementById("main-panel"); node.insertBefore(hint, node.firstChild); }
});}}