function calculateBMI(){
    mass=parseFloat(prompt("enter your mass"))
    height=parseFloat(prompt("Enter your height"))
    bmi=mass/(height/100)**2
    if (bmi<18.5){
        alert("your in under weight")
    }
    else if(bmi<25){
        alert("you are normal bmi")
    }
    else if(bmi<30){
        alert("your over weight")
    }
    else{
    alert("your obese")
    }
    }
    function askToContinue() {
        var answer = prompt("Do you want to calculate BMI? (yes/no)").toLowerCase();
        return (answer === 'yes');
    }
    
    // Main function
    function main() {
        var continueCalculating = true;
    
        while (continueCalculating) {
            calculateBMI();
            continueCalculating = askToContinue();
        }
    
        console.log("Goodbye!");
    }
    
    // Call the main function to start the program
    main();
    