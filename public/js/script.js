const navLinks = document.querySelector('.nav-links');
const donateBtn = document.querySelector('.donate-btn');

// Mobile menu toggle (optional)
document.querySelector('.mobile-menu').addEventListener('click', () => {
    navLinks.classList.toggle('active');
    donateBtn.classList.toggle('active');
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.getElementById('dropdown-menu');

    let isMenuOpen = false;

    dropdownBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from propagating to the document

        if (isMenuOpen) {
            // If menu is already open, close it
            dropdownContent.classList.remove('show');
        } else {
            // If menu is closed, open it
            dropdownContent.classList.add('show');
        }
        isMenuOpen = !isMenuOpen; // Toggle the state
    });

    // Close the dropdown menu if the user clicks outside of it
    document.addEventListener('click', (event) => {
        if (!dropdownContent.contains(event.target) && !dropdownBtn.contains(event.target)) {
            if (isMenuOpen) {
                dropdownContent.classList.remove('show');
                isMenuOpen = false;
            }
        }
    });
});

window.addEventListener('scroll', function() {
    const members = document.querySelectorAll('.member');
    members.forEach(member => {
        const position = member.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            member.classList.add('visible');
        }
    });
});

