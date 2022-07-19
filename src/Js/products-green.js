const green = {
	openModalBtn: document.querySelector(".products-btn--green"),
	modal: document.querySelector(".products-item--green"),
	modalSection: document.querySelector(".products-item__animation--green"),
 };

 green.openModalBtn.addEventListener("click", toggleModalGreen);

 function toggleModalGreen() {
	green.modal.classList.toggle("is-hidden");
	green.modalSection.classList.toggle("is-hidden");
	beige.modalSection.classList.remote("is-hidden");
 }