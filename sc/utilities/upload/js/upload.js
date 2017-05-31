// function to check whether input url is an url
// TODO
function validURL(str) {
        
}


// main function
function saveFromUrl() {
    
    // I have no idea why I need the following line but otherwise I get a warning
    "use strict";
    
    // Get user input url
    var input_url = document.getElementById("upload-url").value,// Download a file form a url.
    
    // error div setup for displaying error message when input is not a url
        errorDiv = document.getElementsByClassName("uploadError")[0];
    
    // check whether the input is a valid url; if not, display error message
    // TODO (at this time just assume the input is a valid url)
    
    // download file to specific location
    var link = document.createElement('a');
    link.href = input_url;
    link.download = '../userStoage/file.pdf'; // specific location. WARNING: might not work
    link.dispatchEvent(new MouseEvent('click'));
}

// unit test: whether the error message display works 
function test() {
    document.getElementsByClassName("uploadError")[0].style.visibility = 'visible';
    document.getElementsByClassName("uploadError")[0].innerHTML = 'abc';
}

