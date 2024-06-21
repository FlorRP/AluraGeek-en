async function cardList(){
    const errorParagraph = document.querySelector("[data-error]");
    try {
        const connection = await fetch("https://664e700dfafad45dfae00f3d.mockapi.io/products");
        const convert = connection.json();

        if (convert.length === 0) {
            //Shows the error paragraph if the respobse is empty
            errorParagraph.style.display = 'block';
        } else {
            //hides the paragraph if there is content
            errorParagraph.style.display = 'none';
        }

        return convert;
    } catch (error) {
        console.error('There has been an error:', error);
    }
    
    
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
