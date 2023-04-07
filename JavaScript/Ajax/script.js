// // AJAX - Asynchronus JavaScript And XML

// // Basic Syntax when sending request with AJAX to the server
// var request = new XMLHttpRequest();

// request.open('GET','URL');
// request.send();

//when you click the button, write the text of about.html
let btn  = document.getElementById('btn');
btn.addEventListener('click',loadAboutInformation);
function loadAboutInformation(){
    var request = new XMLHttpRequest();
    request.open('GET','about.html');
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.getElementById("container").innerHTML = this.responseText;
        }
    }
    request.send();
}