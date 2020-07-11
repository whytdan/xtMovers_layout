const movers = document.querySelectorAll("#movers_hero_svg2 path");

for (let i=0; i<movers.length; i++){
    console.log(`Letter ${i} is ${movers[i].getTotalLength()}`);
}


const navSlide = function(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.low_nav_list');
    const navLinks = document.querySelectorAll('.low_nav_list li');
    
    burger.addEventListener('click', function() {
        //Toggle nav
        nav.classList.toggle('nav-active');
        
        //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 500ms ease forwards ${index / 7 + 0.3}s`;
            }
            
        });
        //Burder animation
        burger.classList.toggle('toggle');
    });
}
navSlide();