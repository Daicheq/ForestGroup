const navMobileItems = document.querySelector('.nav-mobile-items')
const burgerBtn = document.querySelector('.nav-mobile-btn')
const body = document.querySelector('body')

const showMobileMenu = () => {
	navMobileItems.classList.toggle('nav-mobile-items-active')
	if (body.style.overflow === 'visible') {
		body.style.overflow = 'hidden'
	} else {
		body.style.overflow = 'visible'
	}
}

burgerBtn.addEventListener('click', showMobileMenu)

// TODO
// DODAĆ chowanie menu po kliku nas start i w nav itemach
