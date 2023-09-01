const navMobileBox = document.querySelector('.nav__mobile-box')
const allNavItems = document.querySelectorAll('.nav__mobile-box .nav-item')
const navLogo = document.querySelector('.nav__logo')
const burgerBtn = document.querySelector('.nav__mobile-btn')
const body = document.querySelector('body')

const handleNav = () => {
	if (body.style.overflow === 'visible') {
		body.style.overflow = 'hidden'
	} else {
		body.style.overflow = 'visible'
	}

	navMobileBox.classList.toggle('nav__mobile-box--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobileBox.classList.remove('nav__mobile-box--active')
			burgerBtn.classList.remove('is-active')
			body.style.overflow = 'visible'
		})
	})
	navLogo.addEventListener('click', () => {
		navMobileBox.classList.remove('nav__mobile-box--active')
		burgerBtn.classList.remove('is-active')
		body.style.overflow = 'visible'
	})
}

const handleBurgerBtnAnimation = () => {
	burgerBtn.classList.toggle('is-active')
}

burgerBtn.addEventListener('click', handleNav)
burgerBtn.addEventListener('click', handleBurgerBtnAnimation)
