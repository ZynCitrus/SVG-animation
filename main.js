const pushButton = document.getElementById('pushBtn');
pushButton.addEventListener("click", btnPushed);
const numbers6 = document.querySelector(".numberSix");
const numbers12 = document.querySelector(".numberTwelve");
const numbers9 = document.querySelector(".numberNine");
const numbers3 = document.querySelector(".numberThree");
console.log(numbers12)
function btnPushed() {
    gsap.to([numbers6], { 
       duration: 5, x: 79.32, y: 20.31,
      });

    gsap.to([numbers12], { 
        duration: 5, x: 81.95, y: 160.36,
       });

    gsap.to([numbers9], { 
        duration: 5, x: 156, y: 89.57,
       });
 
    gsap.to([numbers3], { 
         duration: 5, x: 10.53, y: 87.15
        });
    
}