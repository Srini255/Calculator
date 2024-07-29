document.addEventListener('DOMContentLoaded',()=>{
    let display=document.getElementById('display');
    let buttons=document.querySelectorAll('#number');
    const operators='+-/*';
    buttons.forEach(button => {
        button.addEventListener('click',()=>{
            const currentValue=display.value;
            const buttonValue=button.value;
            if(currentValue==='0'&&buttonValue==='0'){
                return;
            }
            else if((currentValue===''||operators.includes(currentValue.charAt(currentValue.length-1)))
                &&operators.includes(buttonValue)){
                alert('You cannot add operators like that');
                return;
           }
            else{
            display.value=currentValue+buttonValue;}
        });
        
    });
});

document.getElementById('clear').addEventListener('click',()=>{
    const display=document.getElementById('display');
    display.value='';
})