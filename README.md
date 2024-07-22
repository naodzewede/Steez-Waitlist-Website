# Steez Waitlist Website

Welcome to the official waitlist website for the upcoming fashion app, **Steez**. This site allows users to sign up and secure their spot on our waitlist to be among the first to experience our revolutionary fashion networking platform.

## Live Site

Check out the live site [here](http://www.thesteezapp.com).

## Project Structure

This project is built using HTML, CSS, and JavaScript. The main files include:

- `index.html` - The main HTML file containing the structure of the website.
- `index.css` - The CSS file that styles the website.
- `database.js` - The JavaScript file that handles Firebase integration and form submissions.

## Features

- **Responsive Design**: The site is designed to be fully responsive and works seamlessly across different devices and screen sizes.
- **Firebase Integration**: The waitlist form is integrated with Firebase to securely store user data.
- **Animations**: Smooth animations for enhanced user experience.
- **User Notifications**: Visual feedback to users upon form submission.

## Technologies Used

- **HTML5**: For the basic structure of the website.
- **CSS3**: For styling the website with animations and responsiveness.
- **JavaScript**: For handling form submissions and Firebase integration.
- **Firebase**: For real-time database and secure storage of user data.

## How to Use

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/steez-waitlist-website.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd steez-waitlist-website
   ```

3. **Open `index.html` in your preferred browser**.

## Firebase Configuration

Ensure your Firebase project is set up and replace the configuration details in `database.js` with your own Firebase project details.

```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    databaseURL: "your-database-url",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id",
    measurementId: "your-measurement-id"
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
    var newWaitlistFormDb = waitlistFormDb.push();
    newWaitlistFormDb.set({
        name: name,
        email: email
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
```

## Contributions

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---
