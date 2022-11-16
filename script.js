//rock paper scissors
var cpu;
var user;
var cpu_wins = 0;
var user_wins = 0;
var ties = 0;
var play = true;

function computer_choice(){
    return Math.floor(Math.random() * 3);

}

function user_choice(){
    
    var choice = prompt("Choose R(ock), P(aper), or S(cissors)","").toUpperCase();
    console.log(choice);
    if(choice !== "R" && choice !=="S" && choice !=="P"){//need to figure out how to validate choices
        alert("welp, thats not a choice, default is rock i suppose");
        choice = 0;
    }

    else if(choice == ("R")){
        choice  = 0;
        return choice;
    }else if (choice == ("P")){
        choice = 1;
        return choice;
    }else{
        choice = 2;
        return choice;
   
    }
    

}

function results(user, cpu){

    if(user == cpu){
        alert("Its a tie!");
        ties++;
    }else if((user + cpu == 2) && (user > cpu)){
        alert("the computer won!");
        cpu_wins++;
    }else if(user < cpu && ((cpu + user) == 2)){
        alert("you won!");
        user_wins++;
    }else if(cpu > user){
        alert("the computer won!");
        cpu_wins++;
    }else{
        alert("you won!");
        user_wins++;
    }
}

while(play){
    results(user_choice(), computer_choice());
    play = confirm("SCORES:\ncpu: " + cpu_wins + "\nuser: " + user_wins + "\nties: " + ties);
    console.log(confirm);

}
