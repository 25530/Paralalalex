let scrollAfstand;
let sectie2 = document.getElementsByClassName('sectie--2')[0];
let sectie4 = document.getElementsByClassName('sectie--4')[0];
let sectie6 = document.getElementsByClassName('sectie--6')[0];

window.addEventListener('scroll', (e)=> {
    scrollAfstand = window.pageYOffset;
    //console.log(scrollAfstand);
    corrSection2(scrollAfstand);
    corrSection4(scrollAfstand);
    corrSection6(scrollAfstand);
    if(scrollAfstand >= 938) {
        verwijderClassKop();
    };
});

const corrSection2 = (gescrolled) => {
    sectie2.style.backgroundPositionX = 400 -gescrolled/4 + "px";
    sectie2.getElementsByClassName('sectie__kop')[0].style.marginLeft = -300+gescrolled*2 + "px";
}

const corrSection4 = (gescrolled) => {
    sectie4.style.backgroundPositionX = 400 -gescrolled/3 + "px";
    
}

const corrSection6 = (gescrolled) => {
    sectie6.style.backgroundPositionX = -gescrolled/2 + "px";
}

const verwijderClassKop =() => {
    document.querySelector('sectie--4 h2')[0].classList.remove('selectie--4__kop');
}