let humburger=document.querySelector(".humburger");
let links=document.querySelector(".links");

humburger.addEventListener("click",()=>{
    links.classList.toggle("links-active")
});


let smallImages=document.querySelectorAll(".small-images img");
let bigImg=document.querySelector(".about-img img");

smallImages.forEach(img=>{
    img.addEventListener("click",()=>{
        bigImg.src=img.src;
    })
});


