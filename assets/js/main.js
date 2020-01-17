let buttonsContainer = document.querySelector('.page-content');
let cartCounterLabel = document.querySelector('#cart-counter');
let cartCounter = 0;
let cartPrice = 0;



let btnClickHandler = (e) => {
  let target = e.target;
  
  if (target.classList.contains('btn-add-cart')) {
    cartCounterLabel.innerHTML = `${++cartCounter}`;

    if (cartCounter === 1) cartCounterLabel.style.display = 'block';

    const mockData = +target
    .parentElement
    .previousElementSibling
    .innerHTML
    .replace(/^\$(\d+)\s\D+(\d+).*$/gu,'$1.$2');
    
    cartPrice = Math.round(cartPrice + mockData * 100) / 100;

    let restoreHTML = target.innerHTML;

    target.innerHTML = `Added ${cartPrice.toFixed(2)} $`;

    buttonsContainer.removeEventListener('click', btnClickHandler);

    setTimeout(function(target, restore) {
      target.innerHTML  = restore;
      buttonsContainer.addEventListener('click', btnClickHandler);
    }, 2000, target, restoreHTML);
  }
};

buttonsContainer.addEventListener('click', btnClickHandler);

