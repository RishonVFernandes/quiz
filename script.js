
var current_tab = 0;
let inc = 0;
displayQuestion(current_tab);

function displayQuestion(n) {
    var allforms = document.getElementsByClassName('page');

    // allforms[n].style.display = "block";
    allforms[n].style.display = "block";
    if (n <= 1) {
        document.getElementById("prevBtn").style.display = "none";
    }
    else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (allforms.length - 2)) {
        document.getElementById("nextBtn").innerHTML = "Submit"
    }
    else if (n == 0) {
        document.getElementById("nextBtn").innerHTML = "Start Quiz";
    }
    else {
        document.getElementById("nextBtn").innerHTML = "Next";


    }
    if (n == (allforms.length - 1)) {
        document.getElementById("nextBtn").style.display = "none"
        document.getElementById("prevBtn").style.visibility = "hidden";
        document.getElementById("homePage").style.display = "block";
        document.getElementById("homePage").style.width = "400px";
        document.querySelector('.quiz_interface').style.alignItems = "center";
        checkResults();
        displayAns();



    }
}












function nextPrev(n) {
    var allforms = document.getElementsByClassName('page');
    allforms[current_tab].style.display = "none";





    current_tab = current_tab + n;




    if (current_tab >= allforms.length) {
        return false;
    }




    displayQuestion(current_tab);
}



let recievedAns = [];
let correctAns = ['charmender', 'oddish', 'eevee', 'magnemite', 'gengar', 'alakazam', 'clefairy', 'lapras', 'charizard', 'zapdos', 'meowth', 'arbok', 'ivysaur', 'pidgeot', 'diglett', 'metapod', 'squirtle', 'machamp', 'magikarp', 'pikachu'];


function checkResults() {
    let currentTab = 1;
    var openedTab = document.getElementsByClassName("page");

    // console.log(currentTab)
    var i;
    for (var x = 0; x < openedTab.length - 1; x++) {
        let kas = openedTab[currentTab].getElementsByTagName("input");
        for (i = 0; i < kas.length; i++) {
            if (kas[i].checked == true) {
                recievedAns.push(kas[i].value);
            }

        }
        currentTab++;
    }

    // console.log(recievedAns);
    // console.log(correctAns);
    for (var i = 0; i < correctAns.length; i++) {
        if (recievedAns[i] == correctAns[i]) {
            inc++;
            // console.log(recievedAns[i]); 
        }
        else {




        }
    }
    document.getElementById('result').innerHTML = inc + "/" + correctAns.length;
    // if(recievedAns.forEach(element)==correctAns.forEach(newelement)){
    //     concole.log("correct");
    // }
    // else{
    //     console.log("incorrect");
    // }

    document.getElementById('results').style.display = "flex";

}


function displayAns() {
    let ol = document.getElementById('yourAns');
    let li = ol.getElementsByTagName('li');


    for (let i = 0; i < 20; i++) {
        li[i].innerText = recievedAns[i];
        console.log(recievedAns[i])
    }
    console.log(recievedAns)
}

let i =0;
let txt = 'May I Choose You ? Pokemon Quiz';
function typeWriter() {

    if (i < txt.length) {
        document.getElementById('heading').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// var i = 0;
// var txt = 'Lorem ipsum dummy text blabla.';
// var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("heading").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }