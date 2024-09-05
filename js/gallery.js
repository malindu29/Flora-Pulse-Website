//To change the font size of the displayed text
function fontChange(size){
    document.getElementById("description").style.fontSize = size + "px";
    }
    
    //To change the background colour of the htmk page
    function backgroundchange(bgColor) {
    document.body.style.backgroundColor = bgColor.value;
    }
    
    //To display image and the image description when hovering
    function display(image){
    let largeImg = document.getElementById("expandedImage");
    largeImg.src = image.src;
    
    if (image.id == "picture1"){                        
    document.getElementById("description").innerHTML = document.getElementById("pic1Para").innerHTML;           
    }else if(image.id == "picture2"){
    document.getElementById("description").innerHTML = document.getElementById("pic2Para").innerHTML;
    }else if(image.id == "picture3"){
    document.getElementById("description").innerHTML = document.getElementById("pic3Para").innerHTML;
    }else if(image.id == "picture4"){
    document.getElementById("description").innerHTML = document.getElementById("pic4Para").innerHTML;
    }else if(image.id == "picture5"){
    document.getElementById("description").innerHTML = document.getElementById("pic5Para").innerHTML;
    }else if(image.id == "picture6"){
    document.getElementById("description").innerHTML = document.getElementById("pic6Para").innerHTML;
    }else {
    document.getElementById("description").innerHTML = "";
    }
    largeImg.parentElement.style.display = "block";
    }
    