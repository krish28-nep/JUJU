const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
let currentIndex = 0; // To keep track of the current slide

// Products array with base prices added
const products = [
    {
        id: 1,
        title: "Matka Dhau",
        basePrice: 300,   // Base price for Matka Dhau
        img: "image/matka-dhau.png"
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
const currentProductSizes = document.querySelectorAll("input[name='liter']");

// Function to update the active menu item and slide
function updateSlider(index, updateProduct = false) {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    menuItems.forEach(item => item.classList.remove('active'));
    menuItems[index].classList.add('active');

    if (updateProduct) {
        chosenProduct = products[index];
        currentProductTitle.textContent = chosenProduct.title;
        currentProductImg.src = chosenProduct.img;

        // Default to 1 LTR price on product change
        currentProductPrice.textContent = `Rs${chosenProduct.basePrice}`;
    }
    
    currentIndex = index;
}

// Add click event listeners to menu items
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        updateSlider(index, true);
    });
});

// Update the price dynamically when the radio button is selected
currentProductSizes.forEach((sizeInput) => {
    sizeInput.addEventListener("change", () => {
        const selectedSize = sizeInput.value;

        // Calculate new price based on the selected size multiplier
        const newPrice = chosenProduct.basePrice * sizeMultipliers[selectedSize];

        // Update the displayed price
        currentProductPrice.textContent = `Rs${newPrice}`;
    });
});

// Initial setup to display the first product details
updateSlider(0, true);

