const navLinks = document.querySelector('.nav-links');
const donateBtn = document.querySelector('.donate-btn');

// Mobile menu toggle (optional)
document.querySelector('.mobile-menu').addEventListener('click', () => {
    navLinks.classList.toggle('active');
    donateBtn.classList.toggle('active');
});

document.querySelector('.dropdown-btn').addEventListener('click', function() {
    document.querySelector('.dropdown').classList.toggle('open');
});


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.getElementById('dropdown-menu');
    const content = document.querySelector('.content'); // This should target the main content of the page
    let isMenuOpen = false;

    // Handle dropdown menu toggle
    dropdownBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from propagating to the document

        if (isMenuOpen) {
            // If menu is already open, close it
            dropdownContent.classList.remove('show');
            content.classList.remove('blur');
        } else {
            // If menu is closed, open it
            dropdownContent.classList.add('show');
            content.classList.add('blur');
        }
        isMenuOpen = !isMenuOpen; // Toggle the state
    });

    // Close the dropdown menu if the user clicks outside of it
    document.addEventListener('click', (event) => {
        if (!dropdownContent.contains(event.target) && !dropdownBtn.contains(event.target)) {
            if (isMenuOpen) {
                dropdownContent.classList.remove('show');
                content.classList.remove('blur');
                isMenuOpen = false;
            }
        }
    });

    // Handle scroll animations for board members
    window.addEventListener('scroll', function() {
        const members = document.querySelectorAll('.member');
        members.forEach(member => {
            const position = member.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                member.classList.add('visible');
            }
        });
    });
});



