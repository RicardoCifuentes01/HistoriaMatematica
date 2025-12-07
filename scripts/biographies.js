function biographies() {
    // Selecciona todos los botones "Ver más"
    document.querySelectorAll(".ver").forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".card");

            const title = card.querySelector("h3").textContent;
            const imgSrc = card.querySelector("img").getAttribute("src");
            const imgAlt = card.querySelector("img").getAttribute("alt");
            const bioText = card.querySelector("p.hidden").innerHTML;

            document.getElementById("bioTitle").textContent = title;
            document.getElementById("bioContent").innerHTML = `
      <img src="${imgSrc}" alt="${imgAlt}">
      <div class="bio-text">
        <p>${bioText}</p>
      </div>
    `;

            document.getElementById("bioModal").style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    });

    // Botón de cerrar
    document.getElementById("closeModal").addEventListener("click", () => {
        document.getElementById("bioModal").style.display = "none";
        document.body.style.overflow = ""; // restaura scroll
    });

    // Cerrar al hacer clic fuera del modal
    document.getElementById("bioModal").addEventListener("click", e => {
        if (e.target.id === "bioModal") {
            document.getElementById("bioModal").style.display = "none";
            document.body.style.overflow = "";
        }
    });
}

biographies()