import '../styles/index.css'
import '../styles/reset.css'

// const app = document.querySelector<HTMLDivElement>('#app')!

// app.innerHTML = `


// `

const storeListEl: HTMLUListElement = document.querySelector('.store--item-list')!;
const cartListEl: HTMLUListElement = document.querySelector('.cart--item-list')!;
const totalNumber: HTMLSpanElement = document.querySelector('.total-number')!;

type storeItem = {
  id:string
   name:string
    price:number
}

type cartItem = {
id:string
quantity: number
}

const state: { store: storeItem[];
cart: cartItem []
} = {
  store: [
    {
      id: '001-beetroot',
      name: 'beetroot',
      price: 0.35,
    },
    {
      id: '002-carrot',

      name: 'carrot',
      price: 0.45,
    },
    {
      id: '003-apple',

      name: 'apple',
      price: 0.45,
    },
    {
      id: '004-apricot',

      name: 'apricot',
      price: 0.45,
    },
    {
      id: '005-avocado',

      name: 'avocado',
      price: 0.45,
    },
    {
      id: '006-bananas',

      name: 'bananas',
      price: 0.45,
    },
    {
      id: '007-bell-pepper',

      name: 'bell-pepper',
      price: 0.45,
    },
    {
      id: '008-cherry',

      name: 'cherry',
      price: 0.45,
    },
    {
      id: '009-blueberry',

      name: 'blueberry',
      price: 0.45,
    },
    {
      id: '010-eggplant',
      name: 'eggplant',
      price: 0.45,
    },
  ],

  cart: [],
};

state.cart
function getImagePath(item: {id:string}) {
  return `./assets/icons/${item.id}.svg`;
}
// CREATE STORE ITEMS
function createStoreItem(item: {name:string; id:string}) {
  const liEl = document.createElement('li');

  const iconDiv = document.createElement('div');
  iconDiv.setAttribute('class', 'store--item-icon');

  const imageEl = document.createElement('img');
  imageEl.setAttribute('src', getImagePath(item));
  imageEl.setAttribute('alt', item.name);

  iconDiv.append(imageEl);

  const addToCartButton = document.createElement('button');
  addToCartButton.innerText = 'Add to cart';

  addToCartButton.addEventListener('click', function () {
    // cartListEl.innerHTML = '';
    addItemToCart(item);
    renderAllItems();
  });

  liEl.append(iconDiv, addToCartButton);

  return liEl;
}

// RENDER STORE ITEMS
function renderStoreItems() {
  for (const item of state.store) {
    const liEl = createStoreItem(item);
    storeListEl.append(liEl);
  }
}


//  CREATE CART ITEMS
function createCartItem(cartItem: {id:string ; name:string}) {
  const storeItem = state.store.find(function (item) {
    return item.id === cartItem.id;
  });

  const liEl = document.createElement('li');
  liEl.setAttribute('class', 'cart-item');

  const cartImgEl = document.createElement('img');
  cartImgEl.setAttribute('class', 'cart--item-icon');
  cartImgEl.setAttribute('alt', storeItem.name);
  cartImgEl.setAttribute('src', getImagePath(cartItem));

  const cartPEl = document.createElement('p');
  cartPEl.innerText = storeItem.name;

  // remove btn
  const cartRemoveBtnEl = document.createElement('button');
  cartRemoveBtnEl.setAttribute('class', 'quantity-btn remove-btn center');
  cartRemoveBtnEl.innerText = '-';

  //  span
  const cartSpanEl = document.createElement('span');
  cartSpanEl.setAttribute('class', 'quantity-text center');

  cartSpanEl.innerText = cartItem.quantity;

  // add btn
  const cartAddBtnEl = document.createElement('button');
  cartAddBtnEl.setAttribute('class', 'quantity-btn  add-btn center');
  cartAddBtnEl.innerText = '+';

  cartAddBtnEl.addEventListener('click', function () {
    cartSpanEl.innerText = cartItem.quantity++;
    console.log(state.cart);
    renderAllItems();
  });
  cartRemoveBtnEl.addEventListener('click', function () {
    if (cartItem.quantity <= 1) {
      liEl.remove();
      let itemIndex = state.cart.findIndex(function (element) {
        return element.id === cartItem.id;
      });
      state.cart.splice(itemIndex, 1);
      renderAllItems();
    } else {
      cartSpanEl.innerText = cartItem.quantity--;
      renderAllItems();
    }
  });

  liEl.append(cartImgEl, cartPEl, cartRemoveBtnEl, cartSpanEl, cartAddBtnEl);
  return liEl;
}

// RENDER CART ITEMS
function renderCartItems() {
  for (const item of state.cart) {
    const liEl = createCartItem(item);
    cartListEl.append(liEl);
  }
  let totalPrice = calculateTotal(state);
  // call funtion calculate Total
  // change innter text with totalnumber with result of calculate total
  totalNumber.innerText = totalPrice;
}

//  ADD ALL ITEMS TO CART
function addItemToCart(targetItem) {
  // IS THIS ITEM ALREADY IN THE CART
  const foundItem = state.cart.find(function (cartItem) {
    return cartItem.id === targetItem.id;
  });

  if (foundItem === undefined) {
    const cartItem = {
      id: targetItem.id,
      quantity: 1,
    };

    state.cart.push(cartItem);
  } else {
    foundItem.quantity++;
  }
}

function calculateTotal(state: {store:[]; cart:[]}) {
  // return totalPrice = a * b

  // need to find state store price
  // need to find state cart quantity
  let price = 0;
  for (const cartItem of state.cart) {
    const foundItem = state.store.find(function (storeItem) {
      return cartItem.id === storeItem.id;
    });
    price += foundItem.price * cartItem.quantity;

    // for (const storeItem of state.store) {
    //   if (cartItem.id === storeItem.id) {
    //     price += storeItem.price * cartItem.quantity;
    //   }
    // }
  }
  return price.toFixed(2);
}

// RENDER ALL ITEMS
function renderAllItems() {
  storeListEl.innerHTML = '';
  cartListEl.innerHTML = '';
  renderStoreItems();
  renderCartItems();
}

// renderStoreItems();
// renderCartItems();
renderAllItems();