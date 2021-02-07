var card = [
    {
        key : 0,
        question : "Which of these is not a programming language ?",
        option1 : "Javascript",
        option2 : "Java",
        option3 : "HTML",
        option4 : "CPP",
        correct : "option-3" 
    },
    {
        key : 1,
        question : "Which of the following is not a way to declare variable in Javascript ?",
        option1 : "var",
        option2 : "int",
        option3 : "let",
        option4 : "const",
        correct : "option-2" 
    }
];
let current_key = 0;
let result = 0;
let select_input = document.querySelectorAll('#select [name="question"]');
document.getElementById('submit').addEventListener('click', function(){
    let select = document.querySelector("input[name=question]:checked");
    if(select == null){
        alert('Please select an option');
    }
    else{ 
        if(select.value == card[current_key].correct) {
            document.getElementsByClassName('incorrect')[0].innerText = "Correct";
            document.getElementsByClassName('incorrect')[0].className = "correct answer";
            result++;
        }
        else {
            document.getElementsByClassName('incorrect')[0].classList.add('visible');
        }
        select_input.forEach(function(check){
            check.disabled = true;
        });
        current_key++;
    }
});

document.getElementById('next').addEventListener('click', function(){
    let select = document.querySelector("input[name=question]");
    if(select.disabled == false) {
        alert('Please Submit the solution');
    }
    else if(current_key == 2) {
        document.getElementById('navbar_heading').innerText = 'Score: ' + result;
    }
    else {
        select_input.forEach(function(check){
            check.disabled = false;
            check.checked = false;
        });
        
        document.getElementById('question').innerText = card[current_key].question;
        document.getElementsByClassName('answer')[0].innerText = "Incorrect";
        document.getElementsByClassName('answer')[0].className = "incorrect answer";
        document.querySelector('[for="option1"]').innerText = card[current_key].option1;
        document.querySelector('[for="option2"]').innerText = card[current_key].option2;
        document.querySelector('[for="option3"]').innerText = card[current_key].option3;
        document.querySelector('[for="option4"]').innerText = card[current_key].option4;
    }

});
