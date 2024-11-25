// Function to handle the "Shop now" button click
const shopButtons = document.querySelectorAll('.btn-1, .btn-2');

shopButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to the shopping page...');
        // Here you can redirect to the actual shopping page
        // window.location.href = 'shop.html'; // Uncomment and set your shop page URL
    });
});

// Simple image carousel for the review section
const leftArrow = document.querySelector('.bx-left-arrow-circle');
const rightArrow = document.querySelector('.bx-right-arrow-circle');
const reviewImages = document.querySelector('.img3-container img');
const reviews = [
    {
        image: 'beautiful-young-woman-trying-cosmetic-products.jpg',
        text: "I am really happy that I agree with many of their products. I have been using their products for a long time. I am very happy using their products. I recommend you to use. I hope you like it too very much.",
        author: "@Samita Paudel"
    },
    {
        image: 'another-review-image.jpg', // Placeholder for another review image
        text: "Great quality and fast delivery! Highly recommended!",
        author: "@John Doe"
    },
    // Add more reviews as needed
];

let currentReviewIndex = 0;

function updateReview() {
    reviewImages.src = reviews[currentReviewIndex].image;
    // Update text and author here if needed
}

rightArrow.addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    updateReview();
});

leftArrow.addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    updateReview();
});

// Checkout button toggle
const checkoutButton = document.querySelector('.check out');
checkoutButton.addEventListener('click', () => {
    alert('Redirecting to checkout...');
    // Here you can redirect to the actual checkout page
    // window.location.href = 'checkout.html'; // Uncomment and set your checkout page URL
});