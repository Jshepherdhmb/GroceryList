window.onload = loadCookieList;
var myList = [];
function addItem() {
var input = document.getElementById("newItem").value;

displayItem(input);
}
function removeParentListItem(){
var mom= this.parentNode;
var grandma = mom.parentNode;
grandma.removeChild(mom);
var itemRemove = mom.firstChild.textContent;
var itemIndex = myList.indexOf(itemRemove);
myList.splice(itemIndex,1);
}
function saveList(){
var savedList = myList.toString();
setCookie("savedlist",savedList,2);
}
function clearList(){
document.getElementById("listDisplay").innerHTML = "";
myList = [];
}
function displayItem(input){
var list = document.getElementById("listDisplay");
var item = document.createElement("li");
if(myList.indexOf(input) == -1){
myList.push(document.getElementById("newItem").value);
console.log(myList);
}
var btnClose = document.createElement("button");
var iconClose = document.createElement("span");
var itemName= document.createTextNode(input);
btnClose.addEventListener("click", removeParentListItem);
btnClose.classList.add("btn");
btnClose.classList.add("btn-danger");
btnClose.classList.add("btn-xs");
iconClose.classList.add("glyphicon");
iconClose.classList.add("glyphicon-remove");
btnClose.appendChild(iconClose);
item.appendChild(itemName);
item.appendChild(btnClose);
list.appendChild(item);
document.getElementById("newItem").value = "";
}
function loadCookieList(){
var Cookie = getCookie("savedlist");
var arrayCookie = Cookie.toString();
arrayCookie = arrayCookie.split(",");
for(i=0;i<arrayCookie.length;i++){
displayItem(arrayCookie[i]);
}
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

