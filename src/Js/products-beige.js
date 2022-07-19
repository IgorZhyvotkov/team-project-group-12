const beige = {
	openModalBtn: document.querySelector(".products-btn--beige"),
	modal: document.querySelector(".products-item--beige"),
	modalSection: document.querySelector(".products-item__animation--beige"),
 };

 beige.openModalBtn.addEventListener("click", toggleModalBeige);

 function toggleModalBeige() {
	beige.modal.classList.toggle("is-hidden");
	beige.modalSection.classList.toggle("is-hidden");
	pink.modalSection.classList.remote("is-hidden");
 }

