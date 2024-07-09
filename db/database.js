const firebaseConfig = {
    apiKey: "AIzaSyDh5quRoFK57eMVP7RAMGE65FTG3re80pI",
    authDomain: "steez-website.firebaseapp.com",
    databaseURL: "https://steez-website-default-rtdb.firebaseio.com",
    projectId: "steez-website",
    storageBucket: "steez-website.appspot.com",
    messagingSenderId: "815031721108",
    appId: "1:815031721108:web:c03d995d801ccf3539e881",
    measurementId: "G-XEQW7MZ111"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference database
var waitlistFormDb = firebase.database().ref("waitlistForm");

document.getElementById("waitlistForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');

    saveForm(name, email);

    document.querySelector(".got-it").style.display = "block";

    document.getElementById('nameText').style.visibility = 'visible';

    document.getElementById('emailText').style.visibility = 'visible';

    setTimeout(() => {
        document.querySelector(".got-it").style.display = "none";
    }, 8000);

    document.getElementById("waitlistForm").reset();
}

const saveForm = (name, email) => {
    e.preventDefault();
        grecaptcha.ready(function() {
            grecaptcha.execute('_6LexRgkqAAAAAJhKK-PpiU28aMzTHu7R77T-kSLM', {action: 'submit'}).then(function(token) {
                var newWaitlistFormDb = waitlistFormDb.push();
                newWaitlistFormDb.set({
                    name: name,
                    email: email
                });
            });
        });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}