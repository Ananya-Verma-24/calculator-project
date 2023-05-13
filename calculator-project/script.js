let equal_pressed = 0;
// refer all the buttons excluding AC and DEL
let button_input = document.querySelectorAll(".input-button");
// refer input,clear,equal and erase
let input = document.getElementById('input');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let erase = document.getElementById('erase');

window.onload = () => {
    input.value="";
};

// access each class using forEach
button_input.forEach((button_class) =>{
    button_class.addEventListener("click",() =>{
        if(equal_pressed == 1){
            input.value ="";
            equal_pressed=0;
        }
        input.value += button_class.value;
    });
});

// solve user's input when clicked on equal sign
equal.addEventListener("click", () => {
    equal_pressed = 1 ;
    let inp_val = input.value;
    try{
        // evaluate users input
        let solution = eval(inp_val);
        // true for natural numbers
        // false for decimals
        if(Number.isInteger(solution)){
            input.value = solution;
        }
        else{
            input.value = solution.toFixed(2);
        }
    } catch (err){
        // if user has entered invalid input
        alert("Invalid Input");
    }
});

// clear whole input
clear.addEventListener("click",()=>{
    input.value="";
});

// erase single digit
erase.addEventListener("click", ()=>{
    input.value = input.value.substr(0, input.value.length-1);
})
