class MyDiv extends HTMLElement {
  constructor() {
    super();
    this.name = "Custom Element";
    if (this.hasAttribute("item")){
      const items = this.getAttribute('items');
      this.innerHTML = `<b>Custom Div</b>`;
    }
  }

  

}

const func = () => {
  const tab = document.createElement('my-div');
  console.log(tab instanceof HTMLElement);
  tab.classList.add('tab');
  tab.setAttribute("item","s");
  document.getElementById('navigator').appendChild(tab);

};

const button = document.getElementById("myButton");

button.addEventListener('click', function() {
  this.dispatchEvent(new CustomEvent('my-event', {
    bubbles: true,
    composed: true,
    detail: 'es mi evento'
  }));
});
document.addEventListener('my-event', (event) => {
  console.log('detail: ', event.target);
  func();
});

window.customElements.define('my-div', MyDiv);
