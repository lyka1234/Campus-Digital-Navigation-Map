// Replace with your actual admin credentials
const adminEmail = "angelica.villanueva@email.lcup.edu.ph";
const adminPassword = "lyka1234";

// Get DOM elements
const loginModal = document.getElementById('login-modal');
const adminLoginButton = document.getElementById('admin-login-btn');
const loginButton = document.getElementById('login-button');
const adminEmailInput = document.getElementById('admin-email');
const adminPasswordInput = document.getElementById('admin-password');
const editButton = document.getElementById('edit-button');
const descriptionTextArea = document.getElementById('edit-description');
const descriptionDiv = document.getElementById('description');

// Event listener for admin login button
adminLoginButton.addEventListener('click', function () {
    loginModal.style.display = 'flex';
});

// Event listener for modal close or login button
loginButton.addEventListener('click', function () {
    const email = adminEmailInput.value;
    const password = adminPasswordInput.value;

    if (email === adminEmail && password === adminPassword) {
        loginModal.style.display = 'none';
        editButton.style.display = 'block';
        descriptionTextArea.style.display = 'block';
    } else {
        alert('Invalid email or password');
    }
});

// Event listener for edit button
editButton.addEventListener('click', function () {
    const newDescription = descriptionTextArea.value;
    if (newDescription) {
        descriptionDiv.innerHTML = newDescription + '<button class="edit-button" id="edit-button">Edit</button>';
        descriptionTextArea.style.display = 'none';
        editButton.style.display = 'none';
    }
});
