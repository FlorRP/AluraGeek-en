import { connectionAPI } from "../Services/products-list.js";

const productsDivision = document.querySelector("[data-products]");
const form = document.querySelector("[data-form]");



function createCard(name, price, image, id){
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="card_image">
            <img src="${image}" alt="${name}">
        </div>

        <div class="card_container__info">
            <p class="card_nombre">${name}</p>
            <div class="card_container__value">
                <p class="card_price">$${price}</p>
                <button class="card_delete_price" data-id="${id}">
                    <img src="img/icons8-basura-32.png" alt="Delete"> <!--<a target="_blank" href="https://icons8.com/icon/42858/trash">Basura</a> icono de <a target="_blank" href="https://icons8.com">Icons8</a>-->
                </button>
            </div>                 
        </div>`;
    
    productsDivision.appendChild(card);   

    return card; 
}


async function products() {
    const productsList = await connectionAPI.cardList();
    productsList.forEach(product => {
        productsDivision.appendChild(createCard(product.name, product.price, product.image, product.id));
    });
}

form.addEventListener("submit", async event =>{
    event.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    try{
        await connectionAPI.createNewCard(name, price, image);
    }catch(error){
        console.log(error);
    }
})

productsDivision.addEventListener("click", async event=>{
    event.preventDefault();
    const deleteButton = event.target.closest("[data-id]");
    const id = deleteButton.dataset.id;
    try{
        await connectionAPI.deleteCard(id);
        const product = deleteButton.closest(".card");
        product.remove();
    }
    catch(error){
        console.log(error);
    }
});



    
    
products();
