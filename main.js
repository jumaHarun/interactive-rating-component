import './style.css'

// dom elements
const main = document.getElementById('main');
const ratingBtns = document.querySelectorAll('.rating');
const submitBtn = document.getElementById('submit-btn');
const selectedRating = document.getElementById('select-rating');

// variables
let rating = null;

// onclick
submitBtn.addEventListener('click', () => {
    if (rating === null) {
        // pop up
    } else {
        renderThankYou(rating);
    }
});

ratingBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (rating != null) {
            removeActiveClass(ratingBtns);
        }
        rating = btn.value;
        btn.classList.add('active');
    });
});

// render
function renderThankYou(rating) {
    main.innerHTML = `
        <section class="thank-you">
            <div class="thank-you-img">
                <img src="./images/illustration-thank-you.svg" alt="A thank you illustration">
            </div>

            <div class="select">
                <p>
                    You selected ${rating} out of 5
                </p>
            </div>

            <div class="thank-you-desc">
                <h1>Thank you!</h1>
                <p>
                    We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to
                    get
                    in
                    touch!
                </p>
            </div>
        </section>
    `;
}

// remove active class
function removeActiveClass(btnNodeList) {
    btnNodeList.forEach((btn) => {
        const classes = btn.classList.value.split(' ');
        if (classes.includes('active')) {
            btn.classList.remove('active');
        }
    });
}

