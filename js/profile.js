function showQuestions() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("questionPage").style.display = "block";
    document.getElementById("step1").style.display = "block";
}

let currentStep = 1; // Start from 1 to show the first step
const totalSteps = 5; // Total number of steps
let profileCompletion = 0;
let userData = {}; // Object to store user input data

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        updateProgress();
        displayNextPrompt();
    }
}

function updateProgress() {
    profileCompletion = ((currentStep - 1) / (totalSteps - 1)) * 100; // Subtract 1 to start from 0
    document.querySelector('.progress-bar').style.width = `${profileCompletion}%`;
    document.querySelector('.output h3').textContent = `Profile Completed : ${profileCompletion}%`;
}

function displayNextPrompt() {
    const profileOutput = document.getElementById('profile-output');

    // Display user input in output
    profileOutput.innerHTML = '';
    Object.keys(userData).forEach(key => {
        profileOutput.innerHTML += `<p>${key}: ${userData[key]}</p>`;
    });

    // Hide all prompt containers initially
    document.querySelectorAll('.prompt').forEach(prompt => {
        prompt.style.display = 'none';
    });

    const promptContainer = document.getElementById(`step${currentStep}`); // Select prompt container based on current step
    promptContainer.style.display = 'block';
    
}

function getPersonalDetails() {
    const name = prompt("Enter your name:");
    const surname = prompt("Enter your surname:");
    const age = prompt("Enter your age:");
    const gender = prompt("Enter your gender (Male/Female/Other):");

    if (!name || !surname || !age || !gender) {
        alert("Please fill in all the fields.");
        return;
    }

    userData["Name "] = name;
    userData["Surname "] = surname;
    userData["Age "] = age;
    userData["Gender "] = gender;

    nextStep();
}

function getPreferences() {
    const email = prompt("Enter your email: ");
    const password = prompt("Enter your password: ");
    const confirmPassword = prompt("Confirm your password: ");
    const privacyterms = prompt("Do you agree with the terms of privacy (Yes/No): ");

    if ( !email || !password || !confirmPassword || !privacyterms ) {
        alert("Please fill in all the fields.");
        return;
    }

    userData["Email "] = email;
    userData["password "] = password;
    userData["Confirm Password "] = confirmPassword;
    userData["Agree with privacy terms "] = privacyterms;

    nextStep();
}

function getotherdata1() {
    const q1 = prompt("What do you see as the most significant threats to terrestrial ecosystems in your region? ");
    const q2 = prompt("How can we improve the protection of terrestrial ecosystems? ");

    if (!q1 || !q2) {
        alert("Please fill in all the fields.");
        return;
    }

    userData["Question 1 "] = q1;
    userData["Question 2 "] = q2;

    nextStep();
}

function getotherdata2() {
    const q3 = prompt("What innovative approaches can be taken to preserve natural habitats? ");
    const q4 = prompt("How can technology aid in monitoring and managing land degradation? ");

    if (!q3 || !q4) {
        alert("Please fill in all the fields.");
        return;
    }

    userData[" Question 3 "] = q3;
    userData[" Question 4 "] = q4;

    nextStep();
}
