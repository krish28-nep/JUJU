const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
let currentIndex = 0; // To keep track of the current slide

// Products array with base prices added
const products = [
    {
        id: 1,
        title: "Matka Dhau",
        basePrice: 300,   // Base price for Matka Dhau
        img: "../image/matka-dhau.png"
    },
    {
        id: 2,
        title: "Kalla Dhau",
        basePrice: 250,   // Base price for Kalla Dhau
        img: "image/kalla-dhau.png"
    },
    {
        id: 3,
        title: "Combo Matka-Dhau + Milk",
        basePrice: 380,   // Base price for Special Dhau
        img: "image/special-dhau.png"
    },
    {
        id: 4,
        title: "Ghee",
        basePrice: 300,   // Base price for Ghee
        img: "image/ghee.png"
    },
    {
        id: 5,
        title: "Milk",
        basePrice: 110,    // Base price for Milk
        img: "image/milk.png"
    }
];

let chosenProduct = products[0];

// Size multipliers for different LTR sizes
const sizeMultipliers = {
    "1ltr": 1,    // No change, base price
    "3ltr": 3,    // Triple the base price
    "4ltr": 4     // Quadruple the base price
};

// Elements to update product display
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentproductSizes = document.querySelectorAll(".size");

// Function to update the active menu item and slide
function updateSlider(index, updateProduct = false) {
    // Change the slide position in the slider
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Update active class for the clicked menu item
    menuItems.forEach(item => item.classList.remove('active'));
    menuItems[index].classList.add('active');

    // Only update product details when clicked, not during auto-slide
    if (updateProduct) {
        chosenProduct = products[index];

        // Update product details
        currentProductTitle.textContent = chosenProduct.title;
        currentProductImg.src = chosenProduct.img;
        
        // Default to 1 LTR price on product change
        currentProductPrice.textContent = `Rs${chosenProduct.basePrice}`;
    }
    
    currentIndex = index; // Update the current index
}

// Add click event listeners to menu items
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        updateSlider(index, true);
    });
});

// Add event listeners for BUY NOW buttons in the slider
const buyButtons = document.querySelectorAll(".buyButton");
buyButtons.forEach((button, index) => {
    button.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor click behavior
        updateSlider(index, true); // Update product details based on the index

        // Scroll to the product section smoothly
        document.getElementById('product').scrollIntoView({ behavior: 'smooth' });
    });
});

// Automatic slider function (no product details change)
function autoSlide() {
    currentIndex++;
    if (currentIndex >= menuItems.length) {
        currentIndex = 0;
    }
    updateSlider(currentIndex, false); // Auto-slide but don't update product details
}

// Set an interval to auto-slide every 5 seconds
setInterval(autoSlide, 5000);

// Initial setup to display the first product details
updateSlider(0, true); // Display the first product details on page load

// Update the price dynamically when the size is selected
currentproductSizes.forEach((sizeElement) => {
    sizeElement.addEventListener("click", () => {
        // Reset all size styles
        currentproductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });

        // Highlight the selected size
        sizeElement.style.backgroundColor = "black";
        sizeElement.style.color = "white";

        // Get the selected size (1ltr, 3ltr, 4ltr)
        const selectedSize = sizeElement.textContent;

        // Calculate new price based on the selected size multiplier
        const newPrice = chosenProduct.basePrice * sizeMultipliers[selectedSize];
        
        // Update the displayed price
        currentProductPrice.textContent = `Rs${newPrice}`;
    });
});
