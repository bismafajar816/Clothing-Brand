// Add event listeners to navigation menu items
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Add functionality to navigate to respective pages
    });
});

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.product button').forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Add functionality to add product to cart
    });
});