console.log('Loaded!');

//Change the main text
var element = document.getElementById('main-text');

element.innerHTML = "HI SUBHOJIT";

//Change the image style
var img = document.getElementById('image');

img.onclick = function() {
    img.style.marginLeft = '100px';
};
