
function editSaveText(){//function to edit-save blog header and body
    var buttonLabel = document.getElementsByClassName('blogButton')[0].innerHTML;

    if(buttonLabel == 'Edit <i class="fa fa-edit"></i>'){//This part of function identifies Edit button label and make header and body editable
        var bodyText = document.getElementById('blogBody').innerText;//storing value of blog body in variable
        var blogTitle = document.getElementById('blogTitleNew').innerText;//storing value of blog body in variable

        document.getElementById('blogBody').innerHTML = '';
        document.getElementById('blogTitleNew').innerHTML = '';
        document.getElementById('blogBody').innerHTML = "<textarea id =textArea1>"+bodyText+"</textarea>";
        document.getElementById('blogTitleNew').innerHTML = "<input id ="+"textBox"+">";
        document.getElementById('textBox').value = blogTitle;
        document.getElementsByClassName('blogButton')[0].innerHTML='Save <i class="fa fa-save"></i>';
        
    }else{//This part of function identifies Save button label and saves the edited content
        var bodySavedText = document.getElementById('textArea1').value;
        var blogTitleSaved = document.getElementById('textBox').value;
        
        document.getElementById('blogBody').innerHTML = '';
        document.getElementById('blogTitleNew').innerHTML = '';
        document.getElementById('blogBody').innerHTML = "<p id="+"blogBody"+"class ='blogBodyadjust'>"+bodySavedText+"</p>";
        document.getElementById('blogTitleNew').innerHTML = "<h id="+"blogTitleNew"+">"+blogTitleSaved+"</h>";
        document.getElementsByClassName('blogButton')[0].innerHTML='Edit <i class="fa fa-edit"></i>';
        
    }
}

var commentsDetails = [];//declaring empty array to capture comments details
function addComments(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');

    commentsDetails.push(addEventName);
    document.getElementById('addEventNames').innerHTML = '';
    for(var i = commentsDetails.length - 1; i >= 0 ; i--){//logic to insert comments in latest comment on top
        document.getElementById('addEventNames').innerHTML += '<p class="commentsStyle">'+commentsDetails[i]+'</p>';  
    }    
    a.value=a.defaultValue;//erasing last comment from the comment box
}

var count = 0;

function like(){//function to implement Like feature
count++;

if(count == 1)//logic for single like
document.getElementById("likeCount").innerHTML = "1 person likes this!";

if(count > 1){//logic for likes more than 1
document.getElementById("likeCount").innerHTML = count+" people have liked this!";

}

document.getElementById("likeBlog").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";

}