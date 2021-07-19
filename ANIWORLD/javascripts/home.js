//TITEL FARBLICH ANIMIEREN
function clickTitle(element){        
 
    const titleText = document.querySelector(".aniworld");
    const strTitleText = titleText.textContent;
    titleText.textContent="";

    for(let i = 0; i < strTitleText.length; i++){
        titleText.innerHTML += "<span>" + strTitleText[i] + "</span>";
    }
}

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 3, stagger: 0.25 });

function hochwischen(){
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 1.5 }, "-=1.5");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 3});
}
