
// ******************************
// チョコレートケーキ
// ******************************

const cards = document.querySelectorAll(".card");


if(cards.length > 0) {
    cards.forEach(card => {
        card.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("active"));
       });
    });
}






