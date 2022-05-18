window.onload = terminalInit;

var terminalHistory = []; //Container to hold user inputs for later reference

function terminalInit() { //Initializing terminal for use in navigation of website
    for (lim = 15; lim--;) {
        newDiv = document.createElement("div");
        newDiv.id = "Line" + String(lim);
        filler = document.createElement("br");
        newDiv.append(filler);
        document.getElementById("terminal").append(newDiv);
    };
    initLine = document.getElementById("Line0");
};

document.getElementById("cmdLine").addEventListener("keyup", function(event) {
    print(event)
    if (event.code === 'Enter')
    {
        console.log("Success!");
    }
});

function terminalInput(event) { //Listen for enter keyup, check input against known commands, give errors if necessary
    console.log(event.key);
    console.log(event.code);
    // if (event.key === 'Enter') {
    //     console.log("yarp");
    // }
    
};