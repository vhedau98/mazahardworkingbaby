// all love content
const loveContent=[
{img:"hug.png", text:"come here baccha… big tight hug from me 🤗"},
{img:"kiss.png", text:"forehead kiss for my baby ❤️"},
{img:"walk.png", text:"we walk through everything together pillu"},
{img:"hug.gif", text:"emergency cuddle delivery 🥹❤️"},
{img:"hug.png", text:"you're safe with me always buba"},
{img:"kiss.png", text:"I'm proud of you baby"}
];

// show content
function showLove(){

const random=loveContent[Math.floor(Math.random()*loveContent.length)];

document.getElementById("loveImage").src=random.img;
document.getElementById("loveText").innerText=random.text;
document.getElementById("content").classList.remove("hidden");
}
