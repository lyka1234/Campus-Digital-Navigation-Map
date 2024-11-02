const _0x3b1e=['\x61\x6E\x67\x65\x6C\x69\x63\x61\x2E\x76\x69\x6C\x6C\x61\x6E\x75\x65\x76\x61\x40\x65\x6D\x61\x69\x6C\x2E\x6C\x63\x75\x70\x2E\x65\x64\x75\x2E\x70\x68','\x6C\x79\x6B\x61\x31\x32\x33\x34'];
const _ja=_0x3b1e[0];
const _psn=_0x3b1e[1];
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
    const _n = adminEmailInput.value;
    const _z = adminPasswordInput.value;

(_n === _ja && _z === _psn) && (
    loginModal.style.display = 'none',
    editButton.style.display = 'block',
    descriptionTextArea.style.display = 'block'
) || alert('Invalid email or password');
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
