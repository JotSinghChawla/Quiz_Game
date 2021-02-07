document.getElementById('question').innerText = card[0].question;
document.querySelector('[for="option1"]').innerText = card[0].option1;
document.querySelector('[for="option2"]').innerText = card[0].option2;
document.querySelector('[for="option3"]').innerText = card[0].option3;
document.querySelector('[for="option4"]').innerText = card[0].option4;

var addQuestion = document.querySelector('#scoreBoard ul');
card.forEach(function(add){
    addQuestion.innerHTML+= `<li>${add.question} - <span class="badge badge-success">${add[add.correct]}</span></li>` ;
});
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
    else if(current_key == 10) {
        document.getElementById('navbar_heading').innerText = 'Score: ' + result;
        document.getElementById('card').style.display = 'none';
        document.getElementById('scoreBoard').className = "";
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


