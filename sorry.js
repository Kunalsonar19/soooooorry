const addSorry = (sorry) => {
  const experienceList = document.getElementById("sorryFor");

  const sorryHolder = document.createElement("section");
  sorryHolder.className = "sorrySection reveal";

  const sorryItem = document.createElement("div");
  sorryItem.className = "sorryItem";

  const sorryReason = document.createElement("h1");
  sorryReason.className = "sorryReason";
  // const sorryMessage = document.createElement('h2');
  // sorryMessage.className = "sorryMessage";

  sorryReason.innerHTML = sorry;
  // sorryMessage.innerHTML = "Sorry for the inconvenience."

  sorryItem.appendChild(sorryReason);
  // sorryItem.appendChild(sorryMessage);

  sorryHolder.appendChild(sorryItem);

  experienceList.appendChild(sorryHolder);
};

const addEndingSection = () => {
  const experienceList = document.getElementById("sorryFor");
  const sorryHolder = document.createElement("div");
  sorryHolder.className = "";

  const sorryMessage = document.createElement("div");
  sorryMessage.className = "sorryMessage";
  sorryMessage.innerHTML = "I'm really sorry poopie<br>looove you so much! 🌻";

  const sorryAction = document.createElement("div");

  const sorryActionButton1 = document.createElement("button");
  sorryActionButton1.id = "abhiNahi";
  sorryActionButton1.className = "btn alternate";
  sorryActionButton1.innerHTML = "Abhi Nahi";

  const sorryActionButton2 = document.createElement("button");
  sorryActionButton2.id = "maafKiya";
  sorryActionButton2.className = "btn";
  sorryActionButton2.innerHTML = "Maaf Kiya";

  sorryAction.appendChild(sorryActionButton1);
  sorryAction.appendChild(sorryActionButton2);

  sorryHolder.appendChild(sorryMessage);
  sorryHolder.appendChild(sorryAction);

  experienceList.appendChild(sorryHolder);
};
var sorryFor = [
  "I hurt you with my foolish pride,",
  "And now I feel so empty inside.",
  "I wish I could turn back time,",
  "To make things right and feel sublime.",
  "But since I can't undo the past,",
  "I'll give my all to make love last.",
  "I'll hold you close and never let go,",
  "And love you more than you'll ever know.",
  "I'll cherish every moment we share,",
  "And prove to you how much I care.",
  "I'll show you that I've learned my lesson,",
  "And my love for you will never lessen.",
  "I'm sorry for the pain I've caused,",
  "And for the trust that I have lost.",
  "But I'll do everything in my power,",
  "To prove to you, my love won’t cower.",
  "I promise to make everything right,",
  "And be with you every day and night.",
  "This love is real, it always was,",
  "Let’s build again—because we must.",
];

// sorryFor = [
//     "I want to let you know that I see how what I did was wrong now that I've had time to reflect on it."
//     , "Lately, I have been distant from you. And it's killing me."
//     , "Honey, I am so sorry for my awful behavior. I won't act that way again."
//     , "I am sorry for crossing the lines we established. I promise never to do that again."
//     , "I know I am not perfect and I make mistakes"
//     , "But I am so glad that I have you to help me grow into the best version of myself"
//     , "I never meant for things to spiral so out of control."
//     , "I have made a huge mistake by hurting you"
//     , "I am sorry for the pain I have caused you"
// ]
sorryFor.map(addSorry);
addEndingSection();

function revealAnimation() {
  var reveal = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveal.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveal[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if (revealtop < windowheight - revealpoint) {
      reveal[i].classList.add("active");
    } else {
      reveal[i].classList.remove("active");
    }
  }
}

document
  .getElementById("customScroll")
  .addEventListener("scroll", revealAnimation);

// MODAL

const introModal = document.getElementById("introModal");
const abhiNahiModal = document.getElementById("abhiNahiModal");
const maafKrDiyaModal = document.getElementById("maafKrDiyaModal");
const overlay = document.querySelector(".overlay");
const giveChanceBtn = document.getElementById("giveChance");
const inYourDeramsBtn = document.getElementById("inYourDeram");

const maafKiyaBtn = document.getElementById("maafKiya");
const abhiNahiButton = document.getElementById("abhiNahi");

const jaaoMaafKiyaBtn = document.getElementById("jaaoMaafKiya");
const thodaAurMehnatKaroBtn = document.getElementById("thodaAurMehnatKaro");

// close modal function
const closeActiveModal = function () {
  if (activeModal) activeModal.classList.add("hidden");
  overlay.classList.add("hidden");
  activeModal = undefined;
};

// in your dreams button clicked
const inYourDeramsBtnClicked = function () {
  var dontWantToGiveChance = confirm(
    "Are you sure you don't want to give me a chance?"
  );
  if (dontWantToGiveChance == true)
    alert("Sorry, but this feature isn't available yet :)");
  else closeActiveModal();
};

// close the modal when the close button and overlay is clicked
giveChanceBtn.addEventListener("click", closeActiveModal);
inYourDeramsBtn.addEventListener("click", inYourDeramsBtnClicked);
overlay.addEventListener("click", closeActiveModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !introModal.classList.contains("hidden")) {
    closeActiveModal();
  }
});

var activeModal = undefined;

// open modal function
const openModal = function () {
  activeModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openIntroModal = function () {
  activeModal = introModal;
  openModal();
};

const openAbhiNahiModal = function () {
  activeModal = abhiNahiModal;
  openModal();
};

const openMaafKiyaModal = function () {
  activeModal = maafKrDiyaModal;
  openModal();
};

abhiNahiButton.addEventListener("click", openAbhiNahiModal);
maafKiyaBtn.addEventListener("click", openMaafKiyaModal);

jaaoMaafKiyaBtn.addEventListener("click", () => {
  alert("YAAAAAYYYYY ☝️");
});

thodaAurMehnatKaroBtn.addEventListener("click", () => {
  alert("Okay, Then call me when you are ready");
});

// open modal event
openIntroModal();
