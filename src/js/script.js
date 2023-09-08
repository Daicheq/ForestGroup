const navMobileBox = document.querySelector('.nav__mobile-box')
const allNavItems = document.querySelectorAll('.nav__mobile-box .nav-item')
const navLogo = document.querySelector('.nav__logo')
const burgerBtn = document.querySelector('.nav__mobile-btn')
const body = document.querySelector('body')
const yearSpan = document.querySelector('.year-span')

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

const handleYear = () => {
	const currentDate = new Date()
	const currentYear = currentDate.getFullYear()

	yearSpan.textContent = currentYear
}

burgerBtn.addEventListener('click', handleNav)
burgerBtn.addEventListener('click', handleBurgerBtnAnimation)
document.addEventListener('DOMContentLoaded', handleYear)
