//initial count
let count = 0; 
//select value which is the counter 
//and buttons
const value=document.querySelector('#value');
const btns =document.querySelectorAll(".btn");

btns.forEach(function (btn) {
btn.addEventListener('click', function (e){
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')){
        count--;
    } else if (styles.contains('reset')) {
        count = 0;
    } else if(styles.contains('increase')){
        count ++;
    }
    else if(styles.contains('increase2')){
        count +=2;
    }
    else if(styles.contains('increase3')){
        count +=3;
    }
    if (count > 0) {
        value.style.color = "green";
    }
    if (count === 0) {
        value.style.color = "#222";
    }
    if (count < 0) {
        value.style.color = "red";
    }
    
    value.textContent = count;
});
});