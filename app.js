/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');

/*-------------------------------- Variables --------------------------------*/
let num1
let num2
let operator
let result
let button

/*------------------------ Cached Element References ------------------------*/
const resultDisplayEl = document.querySelector('.display')

/*----------------------------- Event Listeners -----------------------------*/

  
  calculator.addEventListener('click', (event) => {
    
    button = event.target.innerText;
    resultDisplayEl.textContent = button
    
    if (event.target.classList.contains('number')) {
      

        if ( num1 === undefined || operator === undefined){
            
            if (num1 !== undefined && operator === undefined){
                num1 = num1+button
                
                resultDisplayEl.textContent =num1
            }else{
                num1 = button
                
            }
            
        }

        else{
            if (num2 !== undefined ){
                num2 = num2+button
                resultDisplayEl.textContent = num2
            }
            else{
                num2 = button
            }
            
            
        }
   
    }


  
    else if (button === '*' || button === '+' || button === '-' || button === '/' ) {
        operator = button
        
    }

    else if (button === '='){
        calculation()
        resultDisplayEl.textContent = result
    }

    else if( button === 'C'){
        resultDisplayEl.textContent = ""
        num1 = undefined
        num2 = undefined
        result = undefined
        operator = undefined
    }

  });
  


/*-------------------------------- Functions --------------------------------*/

 



const calculation = (event) => {


    if (operator === '*' ){
        result = num1 * num2
        num1 = undefined
        num2 = undefined
    }
    else if (operator === '+'){
        
        result = Number(num1) + Number(num2)
        
        num1 = undefined
        num2 = undefined
        
    }
    else if (operator === '-'){
        result = num1 - num2
        num1 = undefined
        num2 = undefined
    }
    else if (operator === '/'){
        result = num1 / num2
        num1 = undefined
        num2 = undefined
    }

}