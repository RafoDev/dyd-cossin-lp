const openNavBtn = document.querySelector('.nav__button--open');
const closeNavBtn = document.querySelector('.nav__button--close');
const navList = document.querySelector('.nav__list');

openNavBtn.addEventListener('click', () => {
	navList.classList.toggle('nav__list--hide');
	openNavBtn.classList.toggle('display-none');
	closeNavBtn.classList.toggle('display-none');
});

closeNavBtn.addEventListener('click', () => {
	navList.classList.toggle('nav__list--hide');
	openNavBtn.classList.toggle('display-none');
	closeNavBtn.classList.toggle('display-none');
});

const changeNavBarColor = () => {	
	const mainClients = document.getElementById('mainClients');
	const navBar = document.getElementById("navBar");

	const logoTitle = document.querySelector(".nav__logo__title");
	const openButton = document.querySelector(".nav__button--open");
	

	const navBarPos = navBar.getBoundingClientRect().bottom;
	const mainClientsPos = mainClients.getBoundingClientRect().top;

	if(mainClientsPos < navBarPos){

		navBar.classList.add('bg--dark');
	}else{
		navBar.classList.remove('bg--dark');
	}
 
}
window.addEventListener('scroll', changeNavBarColor)



const sections = document.querySelectorAll("section.main__section");
console.log(sections);

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle("animate__fadeInUp", entry.isIntersecting);
		if(entry.isIntersecting) observer.unobserve(entry.target);
	});
},{
	threshold:0,
	rootMargin:"50px"
})

sections.forEach(section => {
	observer.observe(section);
});