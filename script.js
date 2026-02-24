const data = {
  stress: [
    "You're safe. You're loved. You're not alone ❤️",
    "Take one thing at a time. You don't need to solve everything today.",
    "I'm proud of how hard you're trying.",
  ],

  quit: [
    "Don't make big decisions on a bad day 🌙",
    "Rest first, decide later.",
    "Your worth is bigger than any job.",
  ],

  motivation: [
    "You're stronger than this moment 💪",
    "You’ve overcome worse — you got this.",
    "I believe in you always ❤️",
  ],

  smile: [
    "You're ridiculously cute when you're angry 😌",
    "(づ｡◕‿‿◕｡)づ BIG HUG",
    "If smiles were currency you'd be rich.",
  ]
};

function show(type) {
  const arr = data[type];
  const msg = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("result").innerText = msg;
}

function startBreathing() {
  document.getElementById("breathing").classList.remove("hidden");
}
