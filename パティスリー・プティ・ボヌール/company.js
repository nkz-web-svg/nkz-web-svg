

// ***********************************
//              company
// ***********************************

console.log("company js loaded");

window.addEventListener("load", () => {
    const visual = document.querySelector(".company-visual");
    if (visual) {
        visual.classList.add("company-visual-show");
    }

    const modal = document.getElementById("image-modal");
    if (modal) {
        modal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // visual.classList.add("company-visual-show");
});
