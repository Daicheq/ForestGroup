const navMobileBox = document.querySelector('.nav__mobile-box')
const allNavItems = document.querySelectorAll('.nav-item')
const navLogo = document.querySelector('.nav__logo')
const burgerBtn = document.querySelector('.nav__mobile-btn')
const body = document.querySelector('body')
const yearSpan = document.querySelector('.year-span')
const sections = document.querySelectorAll('section')
const navLinksDesktop = document.querySelectorAll('.nav__desktop-items .nav-item')
const homeLink = document.querySelector(`.nav__desktop-items .nav-item[href="index.html#"]`)
const contactLink = document.querySelector(`.nav__desktop-items .nav-item[href="contactPage.html"]`)
const pageLink = window.location.pathname

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

const handleScrollSpy = () => {
	const scrollY = window.scrollY

	if (scrollY === 0) {
		navLinksDesktop.forEach(link => {
			link.classList.remove('active')
		})
		homeLink.classList.add('active')
	} else {
		sections.forEach(sec => {
			let top = window.scrollY
			let offset = sec.offsetTop - 150
			let height = sec.offsetHeight
			let id = sec.getAttribute('id')

			if (top >= offset && top < offset + height) {
				navLinksDesktop.forEach(link => {
					link.classList.remove('active')
				})

				const correspondingLink = document.querySelector(`.nav__desktop-items .nav-item[href="index.html#${id}"]`)

				if (correspondingLink) {
					correspondingLink.classList.add('active')
				}
			}
		})
	}
}

burgerBtn.addEventListener('click', handleNav)
burgerBtn.addEventListener('click', handleBurgerBtnAnimation)
document.addEventListener('scroll', handleScrollSpy)
document.addEventListener('DOMContentLoaded', handleYear)

window.addEventListener('load', function () {
	if (pageLink === '/contactPage.html') {
		homeLink.classList.remove('active')
		contactLink.classList.add('active')
	}
})
