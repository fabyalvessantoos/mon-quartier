const mobileMenu = document.getElementById('mobile-menu');
mobileMenu.addEventListener('click', (event) => {
	event.target.innerText = 'Fermer';
	if (event.target.hidden) { return; }
	const mc = document.getElementById('menu-content');
	const nav = document.getElementById('nav');
	if (mc) {
		if (mc.style.display == '' || mc.style.display == 'none') {
			nav.style.flexDirection = 'column';
			mc.style.display = "block";
		} else {
			event.target.innerText = 'Menu';
			mc.style.display = "none";
			nav.style.flexDirection = 'row';
		};
	}
});