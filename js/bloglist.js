// Get the modal
var modalConfirm = document.getElementById("confirm");
var trashBtn = document.getElementsByClassName("trashicondiv");

var myFunction = function() {
    modalConfirm.style.display="flex";
};

for (var i = 0; i < trashBtn.length; i++) {
    trashBtn[i].addEventListener('click', myFunction, false);
}

var btnYes=document.getElementById("nobtn");
btnYes.addEventListener('click',(e)=>{
    modalConfirm.style.display = "none";
});

var btnthreedot=document.getElementsByClassName("threedotdiv");
var myFunction1 = function() {
    window.location.assign("post.html");
};

for (var i = 0; i < btnthreedot.length; i++) {
    btnthreedot[i].addEventListener('click', myFunction1, false);
}




