function updatePrice() {
    const priceValue = document.getElementById("priceRange").value;
    Document.getElementById("priceValue").textContent = priceValue;
}

// Get buttons and container
const listViewButton = document.getElementById('list-view');
const gridViewButton = document.getElementById('grid-view');
const productContainer = document.getElementById('product-view');

// List view button click event
listViewButton.addEventListener('click', () => {
  productContainer.classList.remove('grid-view');
  productContainer.classList.add('list-view');
});

// Grid view button click event
gridViewButton.addEventListener('click', () => {
  productContainer.classList.remove('list-view');
  productContainer.classList.add('grid-view');
});


  
// for the pagination element 

const pageButtons = document.querySelectorAll('.page-number');
const prevButton = document.querySelector('.page-btn:first-child');
const nextButton = document.querySelector('.page-btn:last-child');

pageButtons.forEach((button) => {
  button.addEventListener('click',() => {
    document.querySelector('.page-number.active').classList.remove('active');
    button.classList.add('active');
    updateButtons();
  });
});

function updateButtons(){
  const activeIndex = Array.from(pageButtons).findIndex((btn) =>
  btn.classList.contains('active')
);
prevButton.disabled = activeIndex === 0;
nextButton.disabled = activeIndex === pageButtons.length - 1;
}

updateButtons();

