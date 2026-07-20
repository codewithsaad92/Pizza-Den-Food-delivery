const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".navlist");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".navlist a");

hamburger.addEventListener("click", () => {
    navlist.classList.toggle("active");
    overlay.classList.toggle("active");

    const icon = hamburger.querySelector("i");

    if (navlist.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

overlay.addEventListener("click", closeMenu);

navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

function closeMenu() {
    navlist.classList.remove("active");
    overlay.classList.remove("active");

    const icon = hamburger.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
}

// Product Cards
const menuItems = [
    {
        name: "Pepperoni Pizza",
        price: 1200,
        image: "images/pizza1.jpg"
    },
    {
        name: "French Fries",
        price: 500,
        image: "images/fries.jpg"
    },
    {
        name: "Italian Pasta",
        price: 900,
        image: "images/pasta.jpg"
    },
    {
        name: "Beef Burger",
        price: 800,
        image: "images/burger.jpg"
    },
    {
        name: "Cheese Pizza",
        price: 1400,
        image: "images/pizza2.jpg"
    }
];

const menuContainer = document.getElementById("menuCards");

menuItems.forEach(item => {
    menuContainer.innerHTML += `
        <div class="menu-card">
            <div class="card-image">
                <img src="${item.image}" alt="${item.name}">
            </div>

            <div class="menu-text">
                <h4>${item.name}</h4>
                <h4 class="price">Rs. ${item.price}</h4>
                <a href="#" class="btn add-cart">Add to Cart</a>
            </div>
        </div>
    `;
});

// Add to cart
let cartCount = 0;

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("add-cart")) {
        e.preventDefault();

        cartCount++;

        document.querySelector(".cart-value").textContent = cartCount;
    }

});

// Reviews
const reviews = [
    {
        name: "Muhammad Saad",
        review: "Pizza Den is the best. Besides the many delicious meals, the service is also very good, especially very fast delivery."
    },
    {
        name: "Muhammad Anas",
        review: "Amazing food quality and very quick delivery. The pizzas were hot and fresh when they arrived."
    },
    {
        name: "Ahsan Raza",
        review: "Best restaurant in town. Easy ordering process and excellent customer support."
    },
    {
        name: "Rao Asjid",
        review: "I highly recommend this place. Delicious meals and affordable prices."
    }
];

let current = 0;

const customerName = document.getElementById("customerName");
const reviewText = document.getElementById("reviewText");

function showReview(index) {
    customerName.textContent = reviews[index].name;
    reviewText.textContent = reviews[index].review;
}

document.getElementById("next").addEventListener("click", () => {
    current++;
    if (current >= reviews.length) {
        current = 0;
    }
    showReview(current);
});

document.getElementById("prev").addEventListener("click", () => {
    current--;
    if (current < 0) {
        current = reviews.length - 1;
    }
    showReview(current);
});
setInterval(() => {
    current++;
    if (current >= reviews.length) {
        current = 0;
    }
    showReview(current);
}, 4000);

// News letter
const newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = newsletterForm.querySelector("input").value;

    alert(`Thank you for subscribing: ${email}`);

    newsletterForm.reset();
});