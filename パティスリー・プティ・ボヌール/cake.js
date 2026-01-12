

// ******************************
// ケーキ
// ******************************

const cards = document.querySelectorAll(".cake-card");

if (cards.length > 0) {
    cards.forEach(card => {
        card.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });
    });
}






