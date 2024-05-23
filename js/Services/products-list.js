async function cardList(){
    const connection = await fetch("https://664e700dfafad45dfae00f3d.mockapi.io/products");
    const convert = connection.json();
    return convert;
}

async function createNewCard(name, price, image){
    const connection = await fetch("https://664e700dfafad45dfae00f3d.mockapi.io/products", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            name: name,
            price: price,
            image: image
        })
    });

    const conversion= connection.json();
    return conversion;
}

async function deleteCard(id){
    const connection = await fetch(`https://664e700dfafad45dfae00f3d.mockapi.io/products/${id}`, {
        method: "DELETE",
        headers: {"Content-Type":"application/json"}
    });
}

export const connectionAPI = {
    cardList,
    createNewCard,
    deleteCard
};
