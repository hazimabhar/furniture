const cart = document.querySelector(".cart");
const subtotalPrice = document.querySelector(".subtotal");
let list = [];
if (window.localStorage.getItem("list")) {
  list = JSON.parse(window.localStorage.getItem("list"));
}

if (list) {
  let subtotal = 0;
  let totalItem = 0;
  list.forEach((product) => {
    cart.innerHTML += `<div class="leftside">
        <div class="line"><hr/></div>
        <div class="detail">
          <img class="productImage" src="${product.productImage}" alt="">
          <p class="productName">${product.productName} <br>${
      product.productDimension
    } <br>
          <select id="qty-${product.productId}"  onchange="subtotal('${
      product.productId
    }')">
          <option value="1" ${
            product.productQuantity === 1 ? "selected" : ""
          }>1</option>
          <option value="2" ${
            product.productQuantity === 2 ? "selected" : ""
          }>2</option>
          <option value="3" ${
            product.productQuantity === 3 ? "selected" : ""
          }>3</option>
          <option value="4" ${
            product.productQuantity === 4 ? "selected" : ""
          }>4</option>
          <option value="5" ${
            product.productQuantity === 5 ? "selected" : ""
          }>5</option>
        </select>
        <button class="removeItem" onclick="deleteProduct('${
          product.productId
        }')">Remove</button></p>
          <p class="price" id="total-${product.productId}">${
      product.productPrice
    }.00</p>
        </div>
      </div>

      `;
    subtotal += product.subtotalPrice;
    totalItem += product.productQuantity;
  });

  let discount = 0;
  if (totalItem >= 5 && totalItem <= 10) {
    discount = subtotal * 0.05;
  } else if (totalItem > 10) {
    discount = subtotal * 0.15;
  }
  let shippingfee = 0;
  if (subtotal < 100) {
    shippingfee = 10;
  }
  if (subtotal === 0) {
    shippingfee = 0;
  }

  let payment = subtotal + shippingfee - discount;
  subtotalPrice.innerHTML += `<div class="rightside">
      <table>
        <thead>
          <th>Order Summary</th>
        </thead>
        <tbody>
          <tr>
            <td class="priceDetail">Product</td>
            <td id="subtotal">${subtotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td class="priceDetail">Shipping</td>
            <td id="shipping">${shippingfee.toFixed(2)}</td>
          </tr>
          <tr >
            <td class="priceDetailLast">Discount</td>
            <td class="priceDetailLast" id="discount">${discount.toFixed(
              2
            )}</td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td class="subtotalPrice" id="payment">${payment.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="placeOrder" onclick="finish()">Place Order</button>`;
}

function subtotal(productId) {
  const product = JSON.parse(window.localStorage.getItem("list")).filter(
    (product) => product.productId === productId
  )[0];

  const quantity = document.querySelector("#qty-" + productId).value;
  product.productQuantity = parseInt(quantity);

  let newProductInCart = JSON.parse(window.localStorage.getItem("list")).filter(
    (product) => product.productId !== productId
  );

  newProductInCart = [...newProductInCart, product];

  let discount = 0;
  let payment = 0;
  let itemQuantity = 0;

  newProductInCart.forEach((product) => {
    payment += product.productQuantity * product.productPrice;
    itemQuantity += product.productQuantity;
  });

  if (itemQuantity >= 5 && itemQuantity <= 10) {
    discount = payment * 0.05;
  } else if (itemQuantity > 10) {
    discount = payment * 0.15;
  }

  let shippingfee = 0;
  if (payment < 100) {
    shippingfee = 10;
  }

  console.log(discount);
  console.log(payment);
  console.log(shippingfee);
  document.querySelector("#total-" + productId).innerHTML =
    product.productQuantity * product.productPrice;
  document.querySelector("#subtotal").innerHTML = "MYR " + payment;
  document.querySelector("#shipping").innerHTML = "MYR " + shippingfee;
  document.querySelector("#discount").textContent = "MYR " + discount;

  window.localStorage.setItem("list", JSON.stringify(newProductInCart));
}

function deleteProduct(productId) {
  let newcartlist = JSON.parse(window.localStorage.getItem("list")).filter(
    (product) => product.productId !== productId
  );

  window.localStorage.setItem("list", JSON.stringify(newcartlist));

  window.location.href = "cart.html";
}

function finish() {
  alert("Your order has been set. Wait for the delivery");
}
