const buyButoons = document.querySelectorAll(".buyButoons");
const blackScreen = document.querySelector(".black-screen");
const closeBlackScreen = document.getElementById("closeBlackScreen");

// total price section
const totalPrice = document.getElementById("totalPrice");
const updateTotalPrice = () => {
  const allProducts = document.querySelectorAll(".product-detail");
  let total = 0;

  allProducts.forEach(item => {
    const price = Number(item.getElementsByClassName("price")[0].innerText.replace("$", ""));
    const quantity = Number(item.getElementsByClassName("numOfProduct")[0].value);

    total = total + (price*quantity);
  });

  totalPrice.innerText = `$${total}`;
}


// whin click on Buy buttons these code will active
buyButoons.forEach(item => {
  item.addEventListener("click", (eo) => {
    // these code will change the background of Buy button and replace the text to Done
    item.setAttribute("disabled", "");
    item.classList.remove("btn-primary");
    item.classList.add("btn-success");
    item.innerHTML = "&#10004; Done";

    // these code will create a popUp and give it animation
    const popUp = document.createElement("div");
    popUp.classList.add("popup");
    popUp.innerHTML = "تم أضافة المنتج الى العربة";
    body.append(popUp);
    setTimeout(() => {
      popUp.style.transform = "translateX(-250%)";
    }, 1500);
    setTimeout(() => {
      popUp.remove()
    }, 2400);

    // these code create to you "showItems" button
    const shoeItems = document.createElement("div");
    shoeItems.classList.add("shoe-items");
    shoeItems.innerHTML = "عرض المشتريات";
    body.append(shoeItems);

    // whin click on "shoeItems" these code will active and show you the black screen
    shoeItems.addEventListener("click", (eo) => {
      blackScreen.style.transform = "translateX(0)";
    })

    // whin click on "Buy" these code will add the product img and price and product name in black screen
    // img
    const cart = item.parentElement.parentElement.parentElement;
    const imgSrc = cart.getElementsByClassName("card-img-top")[0].getAttribute("src");
    const productName = cart.getElementsByClassName("card-title")[0].innerText;
    const productPrice = cart.getElementsByClassName("price")[0].innerText;

    // product details
    const productPerant = document.querySelector(".product-perant");
    const addProduct = `
    <div class="product-detail">
      <button class="btn btn-secondary" id="delateProduct">حذف</button>
      <span class="price">${productPrice}</span>
      <div class="amount-product">
        <p>الكمية</p>
        <input type="number" value="1" min="1" dir="rtl" name="number" class="numOfProduct">
      </div>
      <div class="the-product">
        <h5 class="card-title">${productName}</h5>
        <img src="${imgSrc}" class="product-img">
      </div>
    </div>
    `;
    productPerant.innerHTML += addProduct;
    updateTotalPrice()
  });
});

const delateProduct = document.getElementById("delateProduct");
const blackscreen = document.querySelector(".black-screen");

blackScreen.addEventListener("change", (eo) => {
  updateTotalPrice()
});

// whin click on delate button these code will active
const allCardsInGallary = document.querySelectorAll(".card");
blackScreen.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("btn-secondary")) {
    eo.target.parentElement.remove()
    updateTotalPrice()

    const nameOfDelatedProduct = eo.target.parentElement.getElementsByClassName("card-title")[0].innerText;
    allCardsInGallary.forEach(item => {
      const nameOfProduct = item.getElementsByClassName("card-title")[0].innerText;

      // after delate the product these code will return "Buy" buttons
      const buyButoonsAfterDelated = item.getElementsByClassName("buyButoons")[0];
      if (nameOfDelatedProduct == nameOfProduct) {
        buyButoonsAfterDelated.removeAttribute("disabled");
        buyButoonsAfterDelated.classList.add("btn-primary");
        buyButoonsAfterDelated.classList.remove("btn-success");
        buyButoonsAfterDelated.innerHTML = "Buy";
      }
    });

    // after delated the product these code will delate "showItems"
    const delateShoeItems = document.querySelector(".shoe-items");
    setTimeout(() => {
      delateShoeItems.remove()
    }, 200);
  }
});

// whin click on close button in black screen these code will active
closeBlackScreen.addEventListener("click", (eo) => {
  blackScreen.style.transform = "translateX(210vw)";
});