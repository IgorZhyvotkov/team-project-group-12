let refs = {
	openModalBtn: document.querySelector(".hero__about-btn"),
	modal: document.querySelector(".hero__about"),
	modalSection: document.querySelector(".hero__about-text-animation"),
 };

 refs.openModalBtn.addEventListener("click", toggleModalAbout);

 function toggleModalAbout() {
	refs.modal.classList.toggle("is-hidden");
	refs.modalSection.classList.toggle("is-hidden");
 }

let pink = {
	openModalBtn: document.querySelector(".products-btn--pink"),
	modal: document.querySelector(".products-item--pink"),
	modalSection: document.querySelector(".products-item__animation--pink"),
 };

 pink.openModalBtn.addEventListener("click", toggleModalPink);

 function toggleModalPink() {
	pink.modal.classList.toggle("is-hidden");
	pink.modalSection.classList.toggle("is-hidden");
 }

 let beige = {
	openModalBtn: document.querySelector(".products-btn--beige"),
	modal: document.querySelector(".products-item--beige"),
	modalSection: document.querySelector(".products-item__animation--beige"),
 };

 beige.openModalBtn.addEventListener("click", toggleModalBeige);

 function toggleModalBeige() {
	beige.modal.classList.toggle("is-hidden");
	beige.modalSection.classList.toggle("is-hidden");
	
 }

 let green = {
	openModalBtn: document.querySelector(".products-btn--green"),
	modal: document.querySelector(".products-item--green"),
	modalSection: document.querySelector(".products-item__animation--green"),
 };

 green.openModalBtn.addEventListener("click", toggleModalGreen);

 function toggleModalGreen() {
	green.modal.classList.toggle("is-hidden");
	green.modalSection.classList.toggle("is-hidden");
 }

