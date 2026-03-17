/* typing animation */

const text = [
"Machine Learning Developer",
"AI Engineer",
"Computer Vision Enthusiast"
]

let count = 0
let index = 0
let currentText = ""
let letter = ""

function type(){

if(count === text.length){
count = 0
}

currentText = text[count]
letter = currentText.slice(0, ++index)

document.querySelector(".typing").textContent = letter

if(letter.length === currentText.length){
count++
index = 0
}

setTimeout(type,120)

}

type()



/* particles background */

particlesJS("particles-js",{

particles:{

number:{ value:80 },

size:{ value:3 },

move:{ speed:2 },

line_linked:{
enable:true
}

}

})



/* navbar active section highlight */

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-link")

window.addEventListener("scroll",()=>{

let current=""

sections.forEach(section=>{

const sectionTop = section.offsetTop - 100

if(pageYOffset >= sectionTop){
current = section.getAttribute("id")
}

})

navLinks.forEach(link=>{

link.classList.remove("active")

if(link.getAttribute("href") == "#"+current){
link.classList.add("active")
}

})

})