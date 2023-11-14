const buttons = document.querySelectorAll('button');
const screen=document.getElementById('screen');
for(let button of buttons){
    button.addEventListener('click',(e)=>{
        const buttonText=e.target.innerText;
        // screen.value=buttonText;
        if(buttonText ==='C'){
            screen.value ="";
        }
        else if(buttonText ==='x'){
            screen.value +='*';
        }
        else if(buttonText ==='='){
            try{
                screen.value=eval(screen.value);
            }catch (error){
                screen.value="invalid operator!";
            }

        }
        else{
            screen.value +=buttonText;
        }
    })
}