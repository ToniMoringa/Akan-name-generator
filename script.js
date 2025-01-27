const generateAkanName = () =>{
    let yearOfBirth = document.getElementById("yearInput").value;
    let monthOfBirth = Number(document.getElementById("monthInput").value);
    let dayOfBirth = Number(document.getElementById("dayInput").value);
    let genders = document.getElementsByName("gender");
    const chooseGender= () => {
        for (let gender of genders){
            if (gender.checked){
                return gender.value;
        }
    }      
}

    let genderSelected = chooseGender();

    // validation functions

    const monthValidator = () =>{
        if (monthOfBirth < 1 || monthOfBirth > 12) {
            return false;
            } else {
            return true;
            }
        }

    const dayValidator = () => {
        if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
            if (dayOfBirth > 28 || dayOfBirth < 1) {
                return false;
            } else if (monthOfBirth === 2 && dayOfBirth > 29) {
                return false;
            } else if (monthOfBirth === 2 && dayOfBirth < 1) {
                return false;
            } else {
                return true;
            }
        } else if (dayOfBirth < 1 || dayOfBirth > 31){
            return false;
            } else {
                return true;
            }
        }
    
    //validation variables
    let monthValid = monthValidator();
    let dayValid = dayValidator();


    
    let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
            ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

    let daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    let maleAkanNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];
    let femaleAkanNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];
    //generating array Index
    let index;
    
    if (dayOfWeekNumber == 0){
        index = 6;
    } else {
        index = dayOfWeekNumber;
    }

    if (genderSelected == "male" && monthValid && dayValid) {
        document.getElementById('your-akan-name').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index]+ "🎉🎉🎉";
        document.getElementById('nameDisplay').textContent = "Amazing! You got a Name!!";
        document.getElementById('your-akan-name').style.fontSize = "18px";
        return false;
    } else if (genderSelected == "female" && monthValid && dayValid) {
        document.getElementById('your-akan-name').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index] + "🎉🎉🎉";
        document.getElementById('nameDisplay').textContent = "Amazing! You got a Name!!";
        document.getElementById('your-akan-name').style.fontSize = "18px";
        return false;
    } else {
        alert("Date or Month Invalid! Choose a Correct One!!");
    }
}

$(".reset-btn").click(function () {
    event.preventDefault();
 });
