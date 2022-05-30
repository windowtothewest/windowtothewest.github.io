window.onload = terminalInit; 
//Necessary global variables
var terminalHistory = []; //Container to hold user inputs for later reference
var terminalLines = [];
var bashProfileName = String('(base) VIP-user$ ');
class terminalLine{ //Class to hold the name of the generated div, the label to hold username, 
    constructor(divId,label,textId,textValue) {
        this.divId = divId; 
        this.label = label;
        this.textId = textId;
        this.textValue = textValue;
    }
}

function terminalInit() { //Initializing terminal for use in navigation of website
    for (lim = 15; lim--;) { //Terminal line factory
        var newDiv = document.createElement("div");
        divId = "Line" + String(lim);
        newDiv.class = "terminal-line";
        newDiv.id = divId;

        var label = document.createElement("label")
        var labelId = "Label" + String(lim);
        label.id = labelId;

        //var filler = document.createElement("br");
        var textRegion = document.createElement("p");
        var textId = "Text" + String(lim);
        textRegion.id = textId;
        textRegion.className = "lineText";

        //newDiv.append(filler);
        newDiv.append(label);
        newDiv.append(textRegion);

        document.getElementById("terminal").append(newDiv); //push everything to DOM

        newLine = new terminalLine(divId,labelId,textId,""); //generating class instances for ease of reference later on
        terminalLines.push(newLine);
    };

    //Preparing CLI functionality
    initLine = document.getElementById("Line14");
    var inputLine = document.getElementById("cmdLine");
    if (inputLine) {
        inputLine.addEventListener("keyup", function(event) {
            //Eventually add functionality for pressing up/down to move through 
            if (event.code === 'Enter' || event.code === 'NumpadEnter')
            {
                terminalInput(inputLine.value);
            };
        });    
    };
    
    typeWriter("Try typing 'help' to see available commands.",false);
};

function typeWriter(newLine,isCommand) { //Moving up terminal text when command is entered
    //If isCommand is true, the user tag will be written to the terminal along with the command
    //If isCommand is false, only the new line will be written
    //Top line of terminal is index 0
    //Bottom line of terminal is index 14
    let i = 0;
    while (i<=13) {
        upperLineText = document.getElementById(terminalLines[i].textId);
        lowerLineText = document.getElementById(terminalLines[i+1].textId);
        upperLineText.innerHTML = lowerLineText.innerHTML;
        i++;
    };
    bottomDivText = document.getElementById(terminalLines[14].textId);
    if (isCommand==true) {
        bottomLineLabel = document.getElementById(terminalLines[14].labelId);
        bottomDivText.innerHTML = bashProfileName + newLine;
    } else if (isCommand==false) {
        bottomDivText.innerHTML = newLine;        
    }
};

function terminalInput(command) { //Listen for enter keyup, check input against known commands, give errors if necessary
    terminalHistory.push(command);
    var inputLine = document.getElementById("cmdLine");
    // var firstLine = document.getElementById("Line0");
    typeWriter(command,true);
    switch (command) {
        case "help":
            help();
            break;
        case "clear":
            clear();
            break;
        case "ls":
            ls();
            break;
        case "vi":
            vi();
            break;
        case "contacts":
            contacts();
            break;
        default:
            noMatch();
            break;
    }
    inputLine.value = "";
};

//Command line functions
function noMatch() {
    typeWriter("Command not recognized. Try typing 'help' to see available commands.",false);
};

function clear() { //clears all lines of terminal
    terminalText = document.getElementsByClassName("lineText");
    for (i=0;i<terminalText.length;i++) {
        terminalText[i].innerHTML = "";
    };
};

function help() {
    var intro = "Try entering one of the following commands:";
    var functions = "projects github qualifications contacts";
    typeWriter(intro,false);
    typeWriter(functions,false);
};

function contacts() {
    var contactList = [
        "Name: Max (Joji) Nishibuchi",
        "Phone: 1-(303)-960-8270",
        "Email: max.nishibuchi@gmail.com",
        "LinkedIn: https://www.linkedin.com/in/max-nishibuchi/",
        "GitHub: https://www.github.com/windowtothewest"
    ];
    for (i=0;i<contactList.length;i++) {
        typeWriter(contactList[i],false);
    };
};


//Typical linux functionality
function ls() {
    console.log("I still haven't made any fucking functions");
};

function vi() {
    console.log("God help me");
};