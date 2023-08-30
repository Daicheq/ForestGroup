const navMobileItems = document.querySelector('.nav-mobile-items')
const burgerBtn = document.querySelector('.nav-mobile-btn')

const showMobileMenu = () => {
	navMobileItems.classList.toggle('nav-mobile-items-active')
}

burgerBtn.addEventListener('click', showMobileMenu)
