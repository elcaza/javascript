let newTab = document.getElementById("openNew");
let tables = document.querySelector('.tables');



const openTab = (target) => {
    target.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("click, click");
        console.log("tables");
        tables.innerHTML += '<div class="tables__table"><div class="tables__title"></div><div class="tables__close">x</div></div>';
    });
};

openTab(newTab);