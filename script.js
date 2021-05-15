//In progress
var response;
var data;

var requestPlayerData = function(user,pass,passIn,item,asignTo){
  if (passIn) {
    response = await fetch("https://api.scratch.mit.edu/users/" + user /messages/count/);
                         } else {
                            response = await fetch("https://api.scratch.mit.edu/users/" + user + item);
                           }
  data = await response.json();
  document.getElementById(asignTo).innerHTML = data;
};
requestPlayerData(Xpexdex,blank,false,"/messages/count/");

