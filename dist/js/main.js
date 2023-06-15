// GLOBAL ARRAYS
const cartArr = [];
const productsArr = [
  {
    company: "Soma Quality Recordings",
    name: "Various – Soma 25 - Disc 1",
    description:
      "Record surfaces may show some signs of wear and may have slight scuffs or very light scratches that don't affect one's listening experiences. Slight warps that do not affect the sound are \"OK\". The label may have some ring wear or discoloration, but it should be barely noticeable. Spindle marks may be present.",
    price: "$125.00",
    discount: "Near Mint",
    "original price": "14 Apr 2017",
    "images big": [
      "./dist/assets/image-product-1-1.jpg",
      "./dist/assets/image-product-1-2.jpg",
      "./dist/assets/image-product-1-3.jpg",
      "./dist/assets/image-product-1-4.jpg",
    ],
    "images small": [
      "./dist/assets/image-product-1-1-thumbnail.jpg",
      "./dist/assets/image-product-1-2-thumbnail.jpg",
      "./dist/assets/image-product-1-3-thumbnail.jpg",
      "./dist/assets/image-product-1-4-thumbnail.jpg",
    ],
  },
  {
    company: "Soma Quality Recordings",
    name: "Various – Soma 25 - Disc 2",
    description:
      "Record surfaces may show some signs of wear and may have slight scuffs or very light scratches that don't affect one's listening experiences. Slight warps that do not affect the sound are \"OK\". The label may have some ring wear or discoloration, but it should be barely noticeable. Spindle marks may be present.",
    price: "$175.00",
    discount: "Near Mint",
    "original price": "14 Apr 2017",
    "images big": [
      "./dist/assets/image-product-2-1.jpg",
      "./dist/assets/image-product-2-2.jpg",
      "./dist/assets/image-product-2-3.jpg",
      "./dist/assets/image-product-2-4.jpg",
    ],
    "images small": [
      "./dist/assets/image-product-2-1-thumbnail.jpg",
      "./dist/assets/image-product-2-2-thumbnail.jpg",
      "./dist/assets/image-product-2-3-thumbnail.jpg",
      "./dist/assets/image-product-2-4-thumbnail.jpg",
    ],
  },
  {
    company: "Soma Quality Recordings",
    name: "Various – Soma 25 - Disc 3",
    description:
      "The record should show no obvious signs of wear. A 45 RPM or EP sleeve should have no more than the most minor defects, such as any sign of slight handling. An LP cover should have no creases, folds, seam splits, cut-out holes, or other noticeable similar defects. The same should be true of any other inserts, such as posters, lyric sleeves, etc.",
    price: "$175.00",
    discount: "Near Mint",
    "original price": "14 Apr 2017",
    "images big": [
      "./dist/assets/image-product-3-1.jpg",
      "./dist/assets/image-product-3-2.jpg",
      "./dist/assets/image-product-3-3.jpg",
      "./dist/assets/image-product-3-4.jpg",
    ],
    "images small": [
      "./dist/assets/image-product-3-1-thumbnail.jpg",
      "./dist/assets/image-product-3-2-thumbnail.jpg",
      "./dist/assets/image-product-3-3-thumbnail.jpg",
      "./dist/assets/image-product-3-4-thumbnail.jpg",
    ],
  },
];
let smallImgSrcs = [];
let bigImgSrcs = [];

// GLOBAL VARIABLES
let carouselToChange;
let count;

// CLASSES
class CartItem {
  constructor(name, amount, price, img, total) {
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.img = img;
    this.total = total;
  }
}

// FUNCTIONS
function createModalHTML(ind) {
  return `<div class="carousel-modal">
  <button class="modal-close"><i class="fa fa-close"></i></button>
  <div class="carousel" data-count="0">
    <div class="carousel__slider-btns">
      <button class="carousel__slider-btn carousel__slider-btns__left">
        <i class="fa fa-arrow-left"></i>
      </button>
      <button class="carousel__slider-btn carousel__slider-btns__right">
        <i class="fa fa-arrow-right"></i>
      </button>
    </div>
    <div class="carousel__slide">
      <img src="./dist/assets/image-product-${ind}-1.jpg" alt="shoe photo" />
    </div>
    <div class="carousel__slide">
      <img src="./dist/assets/image-product-${ind}-2.jpg" alt="shoe photo" />
    </div>
    <div class="carousel__slide">
      <img src="./dist/assets/image-product-${ind}-3.jpg" alt="shoe photo" />
    </div>
    <div class="carousel__slide">
      <img src="./dist/assets/image-product-${ind}-4.jpg" alt="shoe photo" />
    </div>
  </div>
  <div class="product__pics__small">
    <div class="product__pics__small__div">
      <img
        src=""
        alt="shoe photo"
        class="product__pics__small__div__img"
      />
    </div>
    <div class="product__pics__small__div">
      <img
        src=""
        -1
        alt="shoe photo"
        class="product__pics__small__div__img"
      />
    </div>
    <div class="product__pics__small__div">
      <img
        src=""
        alt="shoe photo"
        class="product__pics__small__div__img"
      />
    </div>
    <div class="product__pics__small__div">
      <img
        src=""
        alt="shoe photo"
        class="product__pics__small__div__img"
      />
    </div>
  </div>
</div>`;
}
function createProductHTML(obj) {
  return `<div class="product">
  <div class="carousel" data-count="0">
    <div class="carousel__slider-btns">
      <button class="carousel__slider-btn carousel__slider-btns__left">
        <i class="fa fa-arrow-left"></i>
      </button>
      <button class="carousel__slider-btn carousel__slider-btns__right">
        <i class="fa fa-arrow-right"></i>
      </button>
    </div>
    <div class="carousel__slide">
            <img src="${obj["images big"][0]}" alt="shoe photo" />
          </div>
          <div class="carousel__slide">
            <img src="${obj["images big"][1]}" alt="shoe photo" />
          </div>
          <div class="carousel__slide">
            <img src="${obj["images big"][2]}" alt="shoe photo" />
          </div>
          <div class="carousel__slide">
            <img src="${obj["images big"][3]}" alt="shoe photo" />
          </div>
  </div>
  <div class="product__pics">
    <div class="product__pics__big">
      <img
        class="product__pics__big__img"
        src="${obj["images big"][0]}"
        alt="shoe photo"
      />
    </div>
    <div class="product__pics__small">
    <div class="product__pics__small__div">
            <img
              src="${obj["images small"][0]}"
              alt="shoe photo"
              class="product__pics__small__div__img"
            />
          </div>
          <div class="product__pics__small__div">
            <img
              src="${obj["images small"][1]}"
              alt="shoe photo"
              class="product__pics__small__div__img"
            />
          </div>
          <div class="product__pics__small__div">
            <img
              src="${obj["images small"][2]}"
              alt="shoe photo"
              class="product__pics__small__div__img"
            />
          </div>
          <div class="product__pics__small__div">
            <img
              src="${obj["images small"][3]}"
              alt="shoe photo"
              class="product__pics__small__div__img"
            />
          </div>
    </div>
  </div>
  <div class="product__info">
    <h3 class="product__info__company">${obj.company}</h3>
    <h2 class="product__info__name">${obj.name}</h2>
    <p class="product__info__desc">
      ${obj.description}
    </p>
    <div class="product__info__price">
      <div class="product__info__price__after">
        <p class="product__info__price__after__price">${obj.price}</p>
        <p class="product__info__price__after__discount">${obj.discount}</p>
      </div>
      <div class="product__info__price__before">
        <p class="product__info__price__before__price">${obj["original price"]}</p>
      </div>
    </div>
    <div class="product__info__add-item flex">
    <div class="product__info__form">
    <div class="product__info__form__counter flex">
      <button
        class="product__info__form__counter__btn product__info__form__counter__btn__minus"
      >
        <i class="fa fa-minus" aria-hidden="true"></i>
      </button>
      <input
        type="text"
        name="quantity"
        id="quantity"
        value="0"
        class="product__info__form__counter__input"
      />
      <button
        class="product__info__form__counter__btn product__info__form__counter__btn__plus"
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  <div class="product__info__add-to-cart">
    <button class="product__info__add-to-cart__btn flex">
      <img src="./dist/assets/icon-cart.svg" alt="cart-icon" />Add to
      cart
    </button>
  </div>
    </div>
  </div>
</div>`;
}
function toggleNav() {
  bars.forEach((bar) => {
    bar.classList.toggle("change");
  });
  nav.classList.toggle("change");
  if (nav.classList.contains("change")) {
    navToggle.style.position = "fixed";
  } else {
    navToggle.style.position = "absolute";
  }
}
function pushToCartArr(arr, obj) {
  if (arr.every((item) => item.name !== obj.name)) {
    arr.push(obj);
  } else {
    arr.forEach((item) => {
      if (item.name === obj.name) {
        item.amount += obj.amount;
        item.total = item.amount * item.price;
      }
    });
  }
}
function createItemObj(e) {
  const name = e.currentTarget
    .closest(".product__info")
    .querySelector(".product__info__name").innerHTML;
  const amount = Number(
    e.currentTarget.closest(".product__info").querySelector("input").value
  );
  const price = Number(
    e.currentTarget
      .closest(".product__info")
      .querySelector(".product__info__price__after__price")
      .innerHTML.slice(1)
  );
  const img = e.currentTarget
    .closest(".product")
    .querySelector(".product__pics__small__div__img").src;
  const total = amount * price;

  return new CartItem(name, amount, price, img, total);
}
function hideCart(e) {
  e.preventDefault();
  cartDiv.classList.toggle("hidden");
}
function setCartHTML(arr) {
  cartDiv.innerHTML = `<h3>Cart</h3>
    <hr />`;
  arr.forEach((itemObj) => {
    const HTML = `<div class="cart__product flex">
      <img
        src="${itemObj.img}"
        alt="shoe photo"
      />
      <div class="cart__product__details flex">
        <p class="cart__product__details__name">${itemObj.name}</p>
        <div class="cart__product__details__price">
          <p class="cart__product__details__price__price">
            $${itemObj.price} x ${itemObj.amount} <span>$${itemObj.total}</span>
          </p>
        </div>
      </div>
      <div class="cart__product__delete-btn">
        <i class="fas fa-trash"></i>
      </div>
    </div>`;

    cartDiv.innerHTML += HTML;
  });
}
function deleteFromCart(e) {
  const name = e.currentTarget
    .closest(".cart__product")
    .querySelector(".cart__product__details__name").innerHTML;
  let index;
  cartArr.forEach((itemObj, i) => {
    if (itemObj.name === name) {
      index = i;
    }
  });
  cartArr.splice(index, 1);
  const element = e.currentTarget.closest(".cart__product");
  element.remove();

  if (cartArr.length === 0) {
    cartDiv.innerHTML = `<h3>Cart</h3>
    <hr />
    <div class="cart__empty">
      <p>Your cart is empty.</p>
    </div>`;
  }

  cartAmount();
}
function cartAmount() {
  const cartAmount = document.querySelector(".cart-amount");
  let amount = 0;
  cartArr.forEach((obj) => {
    amount += obj.amount;
  });
  cartAmount.innerHTML = amount;
  cartAmount.classList.remove("hidden");
  if (amount === 0) {
    cartAmount.classList.add("hidden");
  }
}
function closeModal() {
  modal.classList.add("hidden");
  smallImgSrcs = [];
  modal.innerHTML = "";
}
function carousel() {
  const slides = carouselToChange.querySelectorAll(".carousel__slide");
  if (carouselToChange.dataset.count >= slides.length) {
    carouselToChange.dataset.count = 0;
    count = carouselToChange.dataset.count;
  }
  if (carouselToChange.dataset.count <= -1) {
    carouselToChange.dataset.count = slides.length - 1;
    count = carouselToChange.dataset.count;
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count}00%)`;
  });
}

// SET UP ALL PRODUCTS HTML & ASSIGN EVENT LISTENERS FOR NEW HTML
const products = document.querySelector(".products");
productsArr.forEach((obj) => {
  // set html
  const html = createProductHTML(obj);
  products.innerHTML += html;

  // select slide btns
  const btnsSliderLeft = document.querySelectorAll(
    ".carousel__slider-btns__left"
  );
  const btnsSliderRight = document.querySelectorAll(
    ".carousel__slider-btns__right"
  );

  // slider btns event listeners
  btnsSliderLeft.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      carouselToChange = e.currentTarget.closest(".carousel");
      carouselToChange.dataset.count =
        Number(carouselToChange.dataset.count) - 1;
      count = carouselToChange.dataset.count;
      carousel();
    });
  });
  btnsSliderRight.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      carouselToChange = e.currentTarget.closest(".carousel");
      carouselToChange.dataset.count =
        Number(carouselToChange.dataset.count) + 1;
      count = carouselToChange.dataset.count;
      carousel();
    });
  });

  // cart buttons
  const btnsPlus = document.querySelectorAll(
    ".product__info__form__counter__btn__plus"
  );
  const btnsMinus = document.querySelectorAll(
    ".product__info__form__counter__btn__minus"
  );
  btnsPlus.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const input = e.currentTarget.parentElement.querySelector(
        ".product__info__form__counter__input"
      );
      input.value = Number(input.value) + 1;
    });
  });
  btnsMinus.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const input = e.currentTarget.parentElement.querySelector(
        ".product__info__form__counter__input"
      );
      input.value == 0
        ? (input.value = 0)
        : (input.value = Number(input.value) - 1);
    });
  });
});

// POSITION SLIDES IN EACH CAROUSEL
const carousels = document.querySelectorAll(".carousel");
carousels.forEach((car) => {
  const carouselSlides = car.querySelectorAll(".carousel__slide");
  carouselSlides.forEach((slide, index) => {
    slide.style.left = `${index}00%`;
  });
});

// MEDIA QUERY FOR CONTAINER @ MIN WIDTH 768PX
function containerMQ(e) {
  if (e.matches) {
    // If media query matches
    document.querySelectorAll(".product").forEach((div) => {
      div.classList.add("container");
    });
  } else {
    document.querySelectorAll(".product").forEach((div) => {
      div.classList.remove("container");
    });
  }
}
const x = window.matchMedia("(min-width: 768px)");
containerMQ(x); // Call listener function at run time
x.addEventListener("change", containerMQ);

// SELECTORS
const navToggle = document.querySelector(".mobile-nav-toggle");
const bars = document.querySelectorAll(".bar");
const nav = document.querySelector(".nav");
const smallImgs = document.querySelectorAll(".product__pics__small__div__img");
const cartDiv = document.querySelector(".cart");
const cartDivBtn = document.querySelector(".cart-btn-div");
const addToCartBtns = document.querySelectorAll(
  ".product__info__add-to-cart__btn"
);

// EVENT LISTENERS
// nav menu button
navToggle.addEventListener("click", toggleNav);
// small images
smallImgs.forEach((img) => {
  img.addEventListener("click", function (e) {
    if (img.closest(".modal")) {
      smallImgSrcs.forEach((src, i) => {
        if (e.currentTarget.src == src) {
          carouselToChange.dataset.count = i;
          count = carouselToChange.dataset.count;
          carousel();
        }
      });
    } else {
      const bigImgSrc = e.currentTarget.src.slice(0, -14);
      const bigImg = e.currentTarget
        .closest(".product__pics")
        .querySelector(".product__pics__big__img");
      bigImg.src = `${bigImgSrc}.jpg`;
    }
  });
});
// cart btn
cartDivBtn.addEventListener("click", hideCart);
// add to cart btn
addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // create cart item obj
    const itemObj = createItemObj(e);

    // if 0 is selected alert
    if (itemObj.amount === 0) {
      alert("Please specify quantity");
      return;
    }

    // push item to cart array or change specific item if already in array
    pushToCartArr(cartArr, itemObj);

    // produce cart html
    setCartHTML(cartArr);
    cartDiv.innerHTML += `<button class="checkout">checkout</button>`;

    // cart delete btns
    const dltFromCartBtns = document.querySelectorAll(
      ".cart__product__delete-btn"
    );
    dltFromCartBtns.forEach((btn) => {
      btn.addEventListener("click", deleteFromCart);
    });

    // set cart amount notification
    cartAmount();
  });
});

// big pics event listeners
const modal = document.querySelector(".modal");
const bigImgs = document.querySelectorAll(".product__pics__big__img");
bigImgs.forEach((img) => {
  img.addEventListener("click", function (e) {
    // insert html based off img clicked
    let ind;
    productsArr.forEach((obj, i) => {
      obj["images big"].forEach((src) => {
        if (e.currentTarget.src.includes(src.slice(1))) {
          ind = i + 1;
        }
      });
    });

    modal.innerHTML = createModalHTML(ind);

    // small imgs functionality
    const smallImgss = document.querySelectorAll(
      ".product__pics__small__div__img"
    );
    smallImgss.forEach((img) => {
      img.addEventListener("click", function (e) {
        console.log(e.currentTarget.src);
        if (img.closest(".modal")) {
          smallImgSrcs.forEach((src, i) => {
            if (e.currentTarget.src == src) {
              carouselToChange.dataset.count = i;
              count = carouselToChange.dataset.count;
              carousel();
            }
          });
        } else {
          const bigImgSrc = e.currentTarget.src.slice(0, -14);
          const bigImg = e.currentTarget
            .closest(".product__pics")
            .querySelector(".product__pics__big__img");
          bigImg.src = `${bigImgSrc}.jpg`;
        }
      });
    });

    // selectors
    const carousels = document.querySelectorAll(".carousel");

    // position slides in each carousel
    carousels.forEach((car) => {
      const carouselSlides = car.querySelectorAll(".carousel__slide");
      carouselSlides.forEach((slide, index) => {
        slide.style.left = `${index}00%`;
      });
    });

    const btnsSliderLeft = document.querySelectorAll(
      ".carousel__slider-btns__left"
    );
    const btnsSliderRight = document.querySelectorAll(
      ".carousel__slider-btns__right"
    );

    // slider btns event listeners
    btnsSliderLeft.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        carouselToChange = e.currentTarget.closest(".carousel");
        carouselToChange.dataset.count =
          Number(carouselToChange.dataset.count) - 1;
        count = carouselToChange.dataset.count;
        carousel();
      });
    });
    btnsSliderRight.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        carouselToChange = e.currentTarget.closest(".carousel");
        carouselToChange.dataset.count =
          Number(carouselToChange.dataset.count) + 1;
        count = carouselToChange.dataset.count;
        carousel();
      });
    });

    // modal close btn
    const modalClose = document.querySelector(".modal-close");
    modalClose.addEventListener("click", closeModal);

    modal.classList.remove("hidden");
    carouselToChange = modal.querySelector(".carousel");
    // get big img src
    const bigImgSrc = e.currentTarget.src.slice(0, -4);
    // get small imgs src's array
    const smallImgs = e.currentTarget
      .closest(".product__pics")
      .querySelectorAll(".product__pics__small__div__img");
    smallImgs.forEach((img) => {
      smallImgSrcs.push(img.src);
    });
    // find index of the big picture src in the small img's array
    let index;
    smallImgSrcs.forEach((src, i) => {
      if (src.includes(bigImgSrc)) {
        index = i;
      }
    });
    // use that index to call carousel function and set the big img
    carouselToChange.dataset.count = index;
    count = carouselToChange.dataset.count;
    carousel();
    // set small img's for modal
    modal
      .querySelectorAll(".product__pics__small__div__img")
      .forEach((img, index) => {
        img.src = smallImgSrcs[index];
      });
  });
});
