let current_pass_input=null;
let new_pass_input=null;
let password_form=null;

current_pass_input  = document.getElementById('password');
new_pass_input = document.getElementById('new-password');

password_form = document.querySelector('.form');


password_form.addEventListener('submit', confirm_submit);

function confirm_submit(event){
    event.preventDefault();
    let pass_1= current_pass_input.value;
    console.log(current_pass_input.value);
    let pass_2= new_pass_input.value
    console.log(pass_2);
    if(pass_1 !=0 && pass_2 !=0 && pass_1 == pass_2){
        console.log('son iguales')
    }
}