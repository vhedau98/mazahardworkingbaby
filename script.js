// ❤️ PERSONALIZED TEXT MESSAGES

const data = {

comfort: [
"Hey pillu… bad days happen, but you don’t have to carry it alone ❤️",
"Baccha, come sit with me… everything will feel lighter.",
"Buba, it's okay to feel tired today… just rest baby.",
"You did your best today baby, I'm proud of you.",
"Pillu, your peace matters more than anything else.",
"I'm always here with you no matter what ❤️"
],

smile: [
"You look extra cute when you're angry pillu 😌",
"If bad days were people I'd fight them for you baccha 😤",
"Baby you're my favourite human ❤️",
"Buba you + chai + me = perfect mood fix ☕",
"Emergency smile delivery for my pillu 😌"
],

love: [
"No matter what happens, I'm always with you baby.",
"Pillu you mean so much to me ❤️",
"Baccha nothing is more important than your happiness.",
"Buba we'll figure everything out together okay?",
"You're my person forever baby ❤️"
]

};


// ❤️ SHOW TEXT MESSAGE
function showMessage(type){

// hide hug popup if open
document.getElementById("hugPopup").classList.add("hidden");

const arr = data[type];
const random = arr[Math.floor(Math.random()*arr.length)];

document.getElementById("result").innerText = random;
}



// ❤️ HUG IMAGES + GIF + TEXT

const hugContent = [
{img:"hug.png", text:"Come here pillu… tight hug from me 🤗"},
{img:"kiss.png", text:"Forehead kiss for my baby ❤️"},
{img:"walk.png", text:"We walk through everything together baccha"},
{img:"hug.gif", text:"Emergency cuddle delivery for my baby 🥹❤️"}
];


// ❤️ SHOW HUG POPUP
function showHug(){

document.getElementById("result").innerText="";

const random = hugContent[Math.floor(Math.random()*hugContent.length)];

document.getElementById("hugImage").src = random.img;
document.getElementById("hugText").innerText = random.text;

document.getElementById("hugPopup").classList.remove("hidden");
}


// ❤️ CLOSE HUG
function closeHug(){
document.getElementById("hugPopup").classList.add("hidden");
}
