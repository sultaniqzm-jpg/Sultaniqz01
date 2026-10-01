const products = [
    {
        name: "ສິນຄ້າ 01",
        price: "0 ກີບ",
        description: "ລາຍລະອຽດສິນຄ້າ 01 ຂອງ Sultaniqz"
    },
    {
        name: "ສິນຄ້າ 02",
        price: "0 ກີບ",
        description: "ລາຍລະອຽດສິນຄ້າ 02 ຂອງ Sultaniqz"
    },
    {
        name: "ສິນຄ້າ 03",
        price: "0 ກີບ",
        description: "ລາຍລະອຽດສິນຄ້າ 03 ຂອງ Sultaniqz"
    },
    {
        name: "ສິນຄ້າ 04",
        price: "0 ກີບ",
        description: "ລາຍລະອຽດສິນຄ້າ 04 ຂອງ Sultaniqz"
    }
];

const modal = document.createElement("div");

modal.innerHTML = `
    <div class="product-modal">

        <div class="modal-box">

            <button class="close-modal">×</button>

            <h2 id="modal-name"></h2>

            <div id="modal-price" class="modal-price"></div>

            <p id="modal-description"></p>

            <button class="order-button">
                ສັ່ງຊື້
            </button>

        </div>

    </div>
`;

document.body.appendChild(modal);

const style = document.createElement("style");

style.innerHTML = `
.product-modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    z-index: 9999;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.modal-box {
    width: 100%;
    max-width: 450px;
    background: #0b0b0b;
    border: 2px solid #e60012;
    border-radius: 18px;
    padding: 25px;
    position: relative;
    text-align: center;
    box-shadow: 0 0 30px rgba(230,0,18,0.4);
}

.modal-box h2 {
    margin-bottom: 15px;
}

.modal-price {
    color: #ff172b;
    font-size: 22px;
    font-weight: bold;
    margin: 10px 0;
}

.modal-box p {
    color: #ccc;
    margin: 15px 0;
    line-height: 1.6;
}

.close-modal {
    position: absolute;
    right: 12px;
    top: 8px;
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 50%;
    background: #e60012;
    color: white;
    font-size: 25px;
    cursor: pointer;
}

.order-button {
    width: 100%;
    padding: 13px;
    border: none;
    border-radius: 10px;
    background: #e60012;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}
`;

document.head.appendChild(style);

const buttons = document.querySelectorAll(".buy");

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        const product = products[index];

        document.getElementById("modal-name").textContent = product.name;
        document.getElementById("modal-price").textContent = product.price;
        document.getElementById("modal-description").textContent = product.description;

        modal.querySelector(".product-modal").style.display = "flex";
    });

});

document.querySelector(".close-modal").addEventListener("click", () => {
    modal.querySelector(".product-modal").style.display = "none";
});

modal.querySelector(".product-modal").addEventListener("click", (e) => {

    if (e.target.classList.contains("product-modal")) {
        modal.querySelector(".product-modal").style.display = "none";
    }

});