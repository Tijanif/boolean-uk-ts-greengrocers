import '../styles/index.css'
import '../styles/reset.css'

// const app = document.querySelector<HTMLDivElement>('#app')!

// app.innerHTML = `


// `

const storeListEl: HTMLUListElement = document.querySelector('.store--item-list')!;
const cartListEl: HTMLUListElement = document.querySelector('.cart--item-list')!;
const totalNumber: HTMLSpanElement = document.querySelector('.total-number')!;

const state:{} = {
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


