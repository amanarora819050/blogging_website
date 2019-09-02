
function editSaveText(){  
    var buttonLabel = document.getElementsByClassName('blogButton')[0].innerHTML;

    if(buttonLabel == 'Edit <i class="fa fa-edit"></i>'){
        var bodyText = document.getElementById('blogBody').innerText;
        var blogTitle = document.getElementById('blogTitleNew').innerText;

        document.getElementById('blogBody').innerHTML = '';
        document.getElementById('blogTitleNew').innerHTML = '';
        document.getElementById('blogBody').innerHTML = "<textarea id =textArea1>"+bodyText+"</textarea>";
        document.getElementById('blogTitleNew').innerHTML = "<input id ="+"textBox"+">";
        document.getElementById('textBox').value = blogTitle;
        document.getElementsByClassName('blogButton')[0].innerHTML='Save <i class="fa fa-save"></i>';
        
    }else{
        var bodySavedText = document.getElementById('textArea1').value;
        var blogTitleSaved = document.getElementById('textBox').value;
        
        document.getElementById('blogBody').innerHTML = '';
        document.getElementById('blogTitleNew').innerHTML = '';
        document.getElementById('blogBody').innerHTML = "<p id="+"blogBody"+"class ='blogBodyadjust'>"+bodySavedText+"</p>";
        document.getElementById('blogTitleNew').innerHTML = "<h id="+"blogTitleNew"+">"+blogTitleSaved+"</h>";
        document.getElementsByClassName('blogButton')[0].innerHTML='Edit <i class="fa fa-edit"></i>';
        
    }
}

var commentsDetails = [];
function addComments(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');

    commentsDetails.push(addEventName);
    document.getElementById('addEventNames').innerHTML = '';
    for(var i = commentsDetails.length - 1; i >= 0 ; i--){
        document.getElementById('addEventNames').innerHTML += '<p class="commentsStyle">'+commentsDetails[i]+'</p>';  
    }    
    a.value=a.defaultValue;
}

var count = 0;

function like(){
count++;

if(count == 1)
document.getElementById("likeCount").innerHTML = "1 person likes this!";

if(count > 1){
document.getElementById("likeCount").innerHTML = count+" people have liked this!";

}

document.getElementById("likeBlog").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";

}