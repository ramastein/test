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
document.getElementById("searchform").style.display = "none";
document.getElementsByTagName("footer")[0].style.display="none";

var para=document.createElement("div");
var node=document.createTextNode("Robotic Process Test Automation Tool");
para.appendChild(node);
para.setAttribute("style","display: block;margin-left: 233px;margin-top: 20px;font-size: 20px;text-transform: none;");
document.getElementById("jenkins-home-link").appendChild(para);


}
if(window.location.href.endsWith('/')){
document.querySelectorAll('[href="/legend"]')[0].parentElement.style.display="none";
document.getElementsByClassName("task-link")[0].innerHTML="New Project";
document.getElementsByClassName("task-link")[3].innerHTML="Settings";
document.getElementsByClassName("task-link")[2].innerHTML="Execution History";
document.getElementById("projectstatus").getElementsByTagName("a")[0].firstChild.nodeValue="Status";
document.getElementById("projectstatus").getElementsByTagName("th")[1].style.display="none";
var tbl  = document.getElementById('projectstatus');
    var rows = tbl.getElementsByTagName('tr');

    for (var row=1; row<rows.length;row++) {
      var cels = rows[row].getElementsByTagName('td');
      cels[1].style.display='none';
    }
}

});}}