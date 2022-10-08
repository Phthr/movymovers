/** @format */
window.addEventListener("DOMContentLoaded", () => {
	navOpacity();
	showReview();
})

//nav functionality
const navbar = document.querySelector('.nav')
const navlinks = document.querySelectorAll(".links ul");
const navBar = document.querySelector(".links");
const toggle = document.querySelector(".burger");
const navOpacity = () => {
	toggle.addEventListener("click", () => {
		navBar.classList.toggle("active");

		navlinks.forEach((link, index) => {
			link.style.animation = `navlinksfade 0.3s ease in ${index / 5 + 0.5}s`;
		});
        toggle.classList.toggle('rotate')
	});
};
// nav functionality ends

// reviews functionality
const reviews = [
	{
		id: 1,
		name: "mr and mrs blackwood",
		image: "./images/family2.jpeg",
		review:
			"lorem ipsumLorem ipsum dolor sit amet consectetur adipisicing elit. Illum cupiditate v voluptatem quod hic, perferendis officiis nihil? Magni deserunt esse nisi ipsum porro. Molestiae.",
	},
	{
		id: 2,
		name: "mr and mrs spellbound",
		image: "./images/family3.jpeg",
		review:
			"lorem ipsumLorem ipsum dolor sit amet consectetur perferendis officiis nihil? Magni deserunt esse nisi ipsum porro. Molestiaeadipisicing elit. Illum cupiditate vero dolorum sapiente in iure mollitia, voluptatem quod hic, perferendis officiis nihil? Magni deserunt esse nisi ipsum porro. Molestiae.",
	},
	{
		id: 3,
		name: "mr and mrs cage",
		image: "./images/family.jpeg",
		review:
			"lorem ipsumLorem ipsum dolor sit amet consectetur adipisicing elit. Illum cupiditate vero dolorum sapiente in iure mollitia, voluptatem quod hic Molestiae.",
	},
	{
		id: 4,
		name: "mr and mrs wilson",
		image: "./images/family6.jpeg",
		review:
			"lorem ipsumLorem ipsum dolor sit amet consectetur adipisicing elit. Illum cupiditate vero dolorum sapiente in iure mollitia, voluptatem quod hic, perferendis officiis nihil? Magni deserunt esse nisi ipsum porro. .",
	},
	{
		id: 5,
		name: "mr and mrs black",
		image: "./images/family5.jpeg",
		review:
			"lorem voluptatem quod hic, perferendis officiis nihil? Magni deserunt esse nisi ipsum porro. Molestiae.",
	},
	{
		id: 6,
		name: "mr and mrs rogers",
		image: "./images/family7.jpeg",
		review:
			"lorem voluptatem quod hic, perferendis officiis nihil? Magni deserunt esse nisi ipsum porro. Molestiae lorem voluptatem quod hic, perferendis officiis nihil? Magni deserunt esse nisi ipsum porro. Molestiae.",
	},
];

const img = document.getElementById("person")
const author = document.getElementById("name")
const review = document.getElementById("review")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

//set statring review
let currentReview = 0

function showReview () {
	const item = reviews [currentReview]
	img.src = item.image
	author.textContent = item.name
	review.textContent = item.review
}

nextBtn.addEventListener("click", () => {
	currentReview++
	if (currentReview > reviews.length - 1){
		currentReview = 0
	}
	showReview()
})
prevBtn.addEventListener("click", () => {
	currentReview--
	if (currentReview < 0){
		currentReview = reviews.length -1
	}
	showReview()
})
// end of reviews

// read more/ facts functionality
const facts = [
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, qui nisi esse quae ullam provident obcaecati! Ducimus, aspernatur, praesentium voluptas provident pariatur vitae animi corporis delectus dolor officia, itaque necessitatibus.",

	"Lorem ipsum dolor sit amet consectetur adipisicing elit. provident obcaecati! Ducimus, aspernatur, praesentium voluptas provident pariatur vitae animi corporis delectus dolor officia, itaque necessitatibus.",

	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, qui nisi esse quae ullam provident obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, qui nisi esse quae ullam provident obcaecati! Ducimus, aspernatur, praesentium voluptas provident pariatur vitae animi corporis delectus dolor officia, itaque necessitatibus.pariatur vitae animi corporis delectus dolor officia, itaque necessitatibus.",

	"Ex qui nisi esse quae ullam provident obcaecati! Ducimus, aspernatur, praesentium voluptas provident pariatur vitae animi corporis delectus dolor officia, itaque necessitatibus.",

	"Ducimus aspernatur praesentium voluptas provident pariatur vitae animi corporis delectus dolor officia, itaque necessitatibus.",

	"Lorem ipsum dolor sit amet consectetur adipisicing elit.praesentium voluptas provident pariatur vitae animi corporis delectus dolor officia, Ex, qui nisi esse quae ullam provident obcaecati! Ducimus, aspernatur, praesentium voluptas provident pariatur vitae animi corporis delectus dolor officia, itaque necessitatibus.",

	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, qui nisi esse quae ullam provident obcaecati! Ducimus, aspernatur, praesentium voluptas provident pariatur vitae animi corporis delectus dolor officia, itaque necessitatibus praesentium voluptas provident pariatur vitae animi corporis delectus dolor officia,.",
];
const factParagraph = document.querySelector(".fact-paragraph")
const factButton = document.querySelector(".fact-button")

factButton.addEventListener('click', () => {
const randomFact = generateRandomFact()
factParagraph.textContent = facts[randomFact]
console.log ("clicked")

})

function generateRandomFact (){
return Math.floor(Math.random() * facts.length)
}
// readmore/facts functionaity ends here
// smmoth scroll
 const scrollLinks = document.querySelectorAll(".scroll-link")

 scrollLinks.forEach(function(link){
	 
	 link.addEventListener('click',(e) => {
		 
		 e.preventDefault()

		 const id = e.currentTarget.getAttribute('href').slice(1)
		 console.log(id)
		 const element = document.getElementById(id)
		 navHeight = navbar.getBoundingClientRect().height

		 let position = element.offsetTop - navHeight

		window.scroll({
			left: 0,
			top:position,
		})
			navBar.classList.toggle("active");
	 })
 })