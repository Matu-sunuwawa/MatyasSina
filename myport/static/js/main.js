

// const btn = document.querySelector('.profile');
// console.log(btn)
// // console.log("Hello");
// btn.addEventListener('mouseover', blur);
// function blur(e) {
//     e.preventDefault();
//     console.log("Clicked")
//     // document.querySelector('.profile').classList.add('overlay');
// }

// const toTop = document.querySelector('.to-top');

// window.addEventListener("scroll", () => {
//     if (window.pageYOffset > 100) {
//         toTop.classList.add("active");
//     } else {
//         toTop.classList.remove("active");
//     }
// })

// const mama = document.querySelector(".to-top");

// mama.addEventListener('mouseover', bb);

// function bb(e) {
//     e.preventDefault();
//     console.log('clicked');
//     mama.classList.add('active');
// }


// Mlogo
const mlogo = document.querySelector(".logo");

mlogo.addEventListener('click', (e) => {
	// e.preventDefault();
	// console.log('clickeddd');
	mlogo.classList.toggle('box2');
});





var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
// images[0] = "http://lorempixel.com/400/200/animals";
// images[1] = "http://lorempixel.com/400/200/sports";
// images[2] = "http://lorempixel.com/400/200/food";
// images[3] = "http://lorempixel.com/400/200/people";

const pic1 = "static/img/mat1.jpg";
const pic2 = "static/img/mat2.jpg";
const pic3 = "static/img/mat4.jpg";
const pic4 = "static/img/mat5.jpg";

images[0] = pic1;
images[1] = pic2;
images[2] = pic3;
images[3] = pic4;

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;


// Removing the icon
const icons = document.querySelector(".background1");
const icons2 = document.querySelector(".background2");
const icons3 = document.querySelector(".background3");
const icons4 = document.querySelector(".background4");
// console.log(icons4)
// icons.classList.remove('to-top');
icons.addEventListener('mouseover', (e) => {
	document.querySelector(".to-top").classList.add("to-top-op");
})
icons2.addEventListener('mouseover', (e) => {
	document.querySelector(".to-top").classList.remove("to-top-op");
})
icons3.addEventListener('mouseover', (e) => {
	document.querySelector(".to-top").classList.remove("to-top-op");
})
icons4.addEventListener('mouseover', (e) => {
	document.querySelector(".to-top").classList.remove("to-top-op");
})
