   
   
        const button = document.querySelector(".card-img-top");
        const popup = document.querySelector("#popup");
        const close = document.querySelector("#popupClose");



        button.addEventListener('click', () => {
            popup.style.display = "block"
        });
        close.addEventListener('click', () => {
            popup.style.display = "none";
        });
        popup.addEventListener('click', (e) => {
            popup.style.display = "none";
        });
  