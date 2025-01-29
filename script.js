document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');

    // Handling voting form submission
    document.getElementById('votingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedContestant = document.getElementById('contestantSelect').value;
        alert(`You voted for ${selectedContestant}!`);
        // Add logic to record the vote
    });

    // Handling registration form submission
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        alert(`Thank you for registering, ${name}!`);
        // Add logic to handle registration
    });
});
// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/Hide scroll button based on scroll position
window.onscroll = function() {
    let scrollUpBtn = document.getElementById("scrollUpBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};