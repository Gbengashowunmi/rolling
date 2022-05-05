"use strict"
const succeed = document.querySelector('.suceeded');
const working = document.querySelector('.working');
const happy = document.querySelector('.happy');



 function roll(){
    let numB = 0;
    setInterval();
    
  let id = setInterval(frame);
    function frame(){
        if (numB === 200) {
            clearInterval(id)
        }
        else{
            numB++
            succeed.innerHTML = numB + '+';
        }
    } 
    
 
}






window.addEventListener('DOMContentLoaded', roll(), roll1(), roll2())
    

