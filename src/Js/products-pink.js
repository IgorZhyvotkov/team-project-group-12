const pink = {
	openModalBtn: document.querySelector(".products-btn--pink"),
	modal: document.querySelector(".products-item--pink"),
	modalSection: document.querySelector(".products-item__animation--pink"),
 };

 pink.openModalBtn.addEventListener("click", toggleModalPink);

 function toggleModalPink() {
	pink.modal.classList.toggle("is-hidden");
	pink.modalSection.classList.toggle("is-hidden");
 }

