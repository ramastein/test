{{document.addEventListener('DOMContentLoaded', function() {
if(window.location.href.indexOf("/login?from=") !== -1)
{
/*var hint=document.createTextNode("Hint: Use your XXXXXX credentials to login."); 
var node = document.getElementById("main-panel"); 
node.insertBefore(hint, node.firstChild); 
*/

document.body.style.backgroundImage = "url(https://rawgit.com/ramastein/test/master/FDBECT.jpg)";
document.getElementsByTagName('table')[0].cellSpacing ="12px";
document.getElementById("breadcrumbBar").style.display = "none";
document.getElementById("jenkins-head-icon").style.display = "none";
document.getElementById("searchform").style.display = "none";
document.getElementById("jenkins-name-icon").style.width = "174px";
document.getElementsByTagName("footer")[0].style.display="none";
ADD <div style="
    display: block;margin-left: 233px;margin-top: 20px;font-size: 20px;text-transform: none;
">Robotics Process Automation Tool</div>

var para=document.createElement("div");
var node=document.createTextNode("Robotic Process Automation Tool");
para.appendChild(node);
para.setAttribute("style","display: block;margin-left: 233px;margin-top: 20px;font-size: 20px;text-transform: none;");
document.getElementById("jenkins-home-link").appendChild(para);
}
});}}