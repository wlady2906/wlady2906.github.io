var mybutton = document.querySelector('#btn-scroll');
var rootElement = document.documentElement;

window.onscroll = function(){scrollmotion()};

function scrollmotion(){

    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
};

function topfunction(){
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};