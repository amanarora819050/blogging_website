let allPostButton = document.getElementById("postButton1"); 


allPostButton.addEventListener("click",()=>{
    window.location.assign("./html/bloglist.html");
})


// Get the modal
let modalCreatePost = document.getElementById("createPost");

// Get the button that opens the modal
let createPostBtn = document.getElementById("postButton2");

// Get the <span> element that closes the modal
let spanCloseCreatePost = document.getElementById("closeCreatePost");

createPostBtn.addEventListener('click',(e)=>{
    modalCreatePost.style.display="flex";
})

spanCloseCreatePost.addEventListener('click',(e)=>{
    modalCreatePost.style.display = "none";
})

window.onclick = (event) => {
  
    if (event.target == modalCreatePost) {
        modalCreatePost.style.display = "none";
      
    }
}