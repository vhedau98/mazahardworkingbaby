// personalized messages
const data = {

comfort:[
"Hey pillu… bad days happen, but you don’t have to carry it alone ❤️",
"Baccha, come sit with me… everything will feel lighter.",
"Buba, it's okay to feel tired… you don't have to fix everything today.",
"Baby, you did your best today and I'm so proud of you.",
"Pillu, your peace matters more than anything else."
],

smile:[
"You look extra cute when you're angry pillu 😌",
"If bad days were people, I'd fight them for you baccha 😤",
"Baby, you're my favourite human in this world ❤️",
"Buba, you + chai + me = perfect mood fix ☕",
"Emergency smile delivery for my pillu 😌"
],

love:[
"No matter what happens with work, I’m always with you baby.",
"Pillu, you mean so much to me… never forget that.",
"Baccha, nothing is more important than your happiness.",
"Buba, we'll figure everything out together okay?",
"You're my person forever baby ❤️"
]

};

// show text messages
function showMessage(type){
document.getElementById("breathing").classList.add("hidden");
const arr = data[type];
const msg = arr[Math.floor(Math.random()*arr.length)];
document.getElementById("result").innerText = msg;
}

// breathing animation
function startBreathing(){
document.getElementById("result").innerText="";
document.getElementById("breathing").classList.remove("hidden");
}

// hug images + gif + text
const hugContent=[
{img:"hug.png", text:"Come here pillu… tight hug from me 🤗"},
{img:"kiss.png", text:"Forehead kiss for my baby ❤️"},
{img:"walk.png", text:"We walk through everything together baccha"},
{img:"hug.gif", text:"Emergency cuddle delivery for my baby 🥹❤️"}
];

// show hug popup
function showHug(){
const random=hugContent[Math.floor(Math.random()*hugContent.length)];
document.getElementById("hugImage").src=random.img;
document.getElementById("hugText").innerText=random.text;
document.getElementById("hugPopup").classList.remove("hidden");
}

// close hug
function closeHug(){
document.getElementById("hugPopup").classList.add("hidden");
}
