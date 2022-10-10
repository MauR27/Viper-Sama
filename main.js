let qAbility = document.getElementById("h4-q-ability");
let eAbility = document.getElementById("h4-e-ability");
let cAbility = document.getElementById("h4-c-ability");
let xAbility = document.getElementById("h4-x-ability");

let pQ = document.getElementById("p-q-ability");
let pE = document.getElementById("p-e-ability");
let pC = document.getElementById("p-c-ability");
let pX = document.getElementById("p-x-ability");

let videoQ = document.getElementById("video-q");
let videoE = document.getElementById("video-e");
let videoC = document.getElementById("video-c");
let videoX = document.getElementById("video-x");

let btc1 = document.getElementById("btc-1");
let btc2 = document.getElementById("btc-2");
let btc3 = document.getElementById("btc-3");
let btc4 = document.getElementById("btc-4");

qAbility.hidden = false;
eAbility.hidden = true;
cAbility.hidden = true;
xAbility.hidden = true;

videoQ.hidden = false;
videoE.hidden = true;
videoC.hidden = true;
videoX.hidden = true;

pQ.hidden = false;
pE.hidden = true;
pC.hidden = true;
pX.hidden = true;

btc1.onclick = () => {
  qAbility.hidden = false;
  eAbility.hidden = true;
  cAbility.hidden = true;
  xAbility.hidden = true;

  pQ.hidden = false;
  pE.hidden = true;
  pC.hidden = true;
  pX.hidden = true;

  videoQ.hidden = false;
  videoE.hidden = true;
  videoC.hidden = true;
  videoX.hidden = true;

  videoQ.pause();
  videoQ.currentTime = ".1";
  videoQ.play();
};

btc2.onclick = () => {
  qAbility.hidden = true;
  eAbility.hidden = false;
  cAbility.hidden = true;
  xAbility.hidden = true;

  pQ.hidden = true;
  pE.hidden = false;
  pC.hidden = true;
  pX.hidden = true;

  videoQ.hidden = true;
  videoE.hidden = false;
  videoC.hidden = true;
  videoX.hidden = true;

  videoE.pause();
  videoE.currentTime = "0";
  videoE.play();
};

btc3.onclick = () => {
  qAbility.hidden = true;
  eAbility.hidden = true;
  cAbility.hidden = false;
  xAbility.hidden = true;

  pQ.hidden = true;
  pE.hidden = true;
  pC.hidden = false;
  pX.hidden = true;

  videoQ.hidden = true;
  videoE.hidden = true;
  videoC.hidden = false;
  videoX.hidden = true;

  videoC.pause();
  videoC.currentTime = ".1";
  videoC.play();
};

btc4.onclick = () => {
  qAbility.hidden = true;
  eAbility.hidden = true;
  cAbility.hidden = true;
  xAbility.hidden = false;

  pQ.hidden = true;
  pE.hidden = true;
  pC.hidden = true;
  pX.hidden = false;

  videoQ.hidden = true;
  videoE.hidden = true;
  videoC.hidden = true;
  videoX.hidden = false;

  videoX.pause();
  videoX.currentTime = ".1";
  videoX.play();
};
